const Category = require("../models/CartegoryModel");
const Product = require("../models/ProductModel");

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });
  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1, // Fixed typo
    });
    await topLevel.save(); // Save the new category
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory, // Fixed typo
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2, // Fixed typo
    });
    await secondLevel.save(); // Save the new category
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });
  
  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save(); // Save the new category
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description, // Fixed typo
    discountPrice: reqData.discountPrice,
    discountPer: reqData.discountPer,
    imgUrl: reqData.imgUrl,
    brand: reqData.brand,
    price: reqData.price,
    size: reqData.size,
    quantity: reqData.quantity, // Ensure this matches
    category: thirdLevel._id,
  });

  return await product.save();
}


async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "product deleted";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(productId) {
  const product = await Product.findById(productId).populate("category").exec();

  if (!product) {
    throw new Error("product not found");
  }
  return product;
}

async function getAllProduct(reqData) {
  let {
    category,
    color,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;

  pageSizee = pageSize || 10;
  let query = Product.find().populate("category");

  if (category) {
    const existingCategory = await Category.findOne({ name: category });
    if (existingCategory) {
      query = query.where("category").equals(existingCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPage: 0 };
    }
  }
  if (color) {
    const colorSet = new Set(
      color.split(",").map((col) => col.trim().toLowerCase())
    );
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = await query.where("color").regex(colorRegex);
  }
  if (size) {
    const sizeSet = new Set(size);
    query = await query.where("size.name").in([...sizeSet]);
  }
  if (minPrice && maxPrice) {
    query = await query.where("discountPrice").gte(minPrice).lte(maxPrice);
  }
  if (minDiscount) {
    query = await query.where("discountPer").gte(minDiscount);
  }
  if (stock) {
    if (stock == "in_stock") {
      query = await query.where("quantity").gt(0);
    } else if (stock == "out_stock") {
      query = await query.where("quantity").gt(1);
    }
  }
  if (sort) {
    const sortDirection = sort === "pricehigh" ? -1 : 1;
    query = query.sort({ discountPrice: sortDirection });
  }

  const totalProducts = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();

  const totalPage = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: pageNumber, totalPage };
}

async function createMultipleProduct(products){
  for(let product of products){
    await createProduct(product)
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProduct,
  createMultipleProduct
};
