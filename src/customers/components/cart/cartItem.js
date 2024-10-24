import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-9rem]">
            <img className='w-full h-full object-cover object-top' src="https://images.pexels.com/photos/26712791/pexels-photo-26712791/free-photo-of-monkey-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        </div>
        <div className="ml-5 space-y-1">
            <p className="font-semibold">Mens semi mid-size range</p>
            <p className="font-semibold">Size:L White</p>
            <div className="flex space-x-5 items-center text-green-700 mt-6">
                <p className="font-semibold">$122</p>
                <p className="opacity-50 line-through">$200</p>
                <p className="text-green-400 font-semibold">20% off</p>
            </div>
        </div>
       
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex item-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon/>
            </IconButton>
            <IconButton>
              <AddCircleOutlineIcon/>
            </IconButton>
            <div className="m-8">
                <DeleteIcon/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
