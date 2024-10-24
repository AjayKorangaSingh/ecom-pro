import { AddressCard } from "./AddressCard"
import { Button } from "@mui/material";
import CartItem from "../cart/cartItem"

export function OrderSummery(){
    return(
        <div className="p-5 shadow-lg rounded-s-md border">
         <AddressCard/>
         <div className="flex">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
           {[1,1,1,1].map((ele)=>{
            return <CartItem key={ele}/>
           })}
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-15 lg:mt-5">
        <div className="border" style={{width:"430px",height:"200px"}}>
          <p className="uppercase font-bold opacity-60 pb-4 pt-5">Price Details</p>
          <hr />
          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black">
              <span style={{marginLeft:"5px"}}>Price</span>
              <span style={{marginRight:"5px"}}>$222</span>
            </div>
            <div className="flex justify-between pt-3 text-green-600">
              <span style={{marginLeft:"5px"}}>Discount</span>
              <span style={{marginRight:"5px"}}>$22</span>
            </div>
            <div className="flex justify-between pt-3 text-green-600">
              <span style={{marginLeft:"5px"}}>Delivery Charge</span>
              <span style={{marginRight:"5px"}}>Free</span>
            </div>
            <div className="flex justify-between pt-3 text-green-600">
              <span style={{marginLeft:"5px"}}>Total Amount</span>
              <span style={{marginRight:"5px"}}>$200</span>
            </div>
            <Button
              varient="contained"
              className="w-full mt-5"
              sx={{ px: "1.5rem", py: "1rem", backgroundColor: "darkgrey" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}