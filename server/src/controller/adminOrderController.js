const orderService = require("../services/orderService")

const getAllOrders = async(req,res)=>{
  try{
    const orders  =await orderService.getAllOrders()
    return res.status(200).send(orders)
  }catch(err){
    throw new Error(err)
  }
}

const confirmOrder = async(req,res)=>{
    const orderId  = req.params.orderId
    try{
      const orders  =await orderService.confirmOrder(orderId)
      return res.status(200).send(orders)
    }catch(err){
      throw new Error(err)
    }
  }

  const shipOrder = async(req,res)=>{
    const orderId  = req.params.orderId
    try{
      const orders  =await orderService.shipOrder(orderId)
      return res.status(200).send(orders)
    }catch(err){
      throw new Error(err)
    }
  }

  const deliverOrder = async(req,res)=>{
    const orderId  = req.params.orderId
    try{
      const orders  =await orderService.deliverOrder(orderId)
      return res.status(200).send(orders)
    }catch(err){
      throw new Error(err)
    }
  }

  const cancelOrder = async(req,res)=>{
    const orderId  = req.params.orderId
    try{
      const orders  =await orderService.cancelOrder(orderId)
      return res.status(200).send(orders)
    }catch(err){
      throw new Error(err)
    }
  }

  const deleteOrder = async(req,res)=>{
    const orderId  = req.params.orderId
    try{
      const orders  =await orderService.deleteOrder(orderId)
      return res.status(200).send(orders)
    }catch(err){
      throw new Error(err)
    }
  }

  module.exports  ={
    getAllOrders,
    cancelOrder,
    deliverOrder,
    deleteOrder,
    shipOrder,
    confirmOrder
  }