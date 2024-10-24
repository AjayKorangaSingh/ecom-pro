import "./product.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/product/12')}className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[13rem] img">
        <img
          className="h-full w-full object-cover object-left-top"
          src={item.url}
        />
      </div>

      <div className="textPart">
        <div>
          <p className="font-bold opacity-45">{item.brand}</p>
          <p>{item.title}</p>
        </div>
        <div className="">
            <p className="font-semibold">${item.price}</p>
            <p className="line-through opacity-50">$2999</p>
            <p className="text-green-300 font-semibold">disount -${item.discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
