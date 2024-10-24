import { AddressCard } from "../checkout/AddressCard";
import Tracker from "./tracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <Tracker activeStep={4} />
      </div>
      <Grid container className="space-x-5">
        {[1, 1, 1.1].map((ele) => {
          return (
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItem: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center space-x-2">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://images.pexels.com/photos/26712791/pexels-photo-26712791/free-photo-of-monkey-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  />
                  <div className="space-y-2 ml-5">
                    <p className="font-semibold">Mens Slim L Size Jeans</p>
                    <p className="space-x-4 opacity-50 text-xs font-semibold">
                      <span>Color:pink</span>
                      <span>Size:M</span>
                    </p>
                    <p>Seller Medium</p>
                    <p>$3000</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box sx={{ color: "deeppink" }}>
                  <StarBorderIcon />
                  <span>Rate and Rating Reviews</span>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OrderDetails;
