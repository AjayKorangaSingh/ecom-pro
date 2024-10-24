import { Grid } from "@mui/material";
import { OrderCard } from "./orderCard";
export function Order() {
  const orderStaus = [
    { label: "On The Way", status: "on_the_way" },
    { label: "Delivered", status: "delivered" },
    { label: "Cancelled", status: "cancelled" },
    { label: "Returned", status: "returned" },
  ];
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStaus.map((order) => {
                return (
                  <div className="flex items-center" key={order.label}>
                    <input
                      defaultValue={order.status}
                      type="checkbox"
                      className="h-4 w-4 border-grey-300 text-indigo-600 focus:ring-indigo-400"
                    />
                    <label
                      className="ml-3 text-sm text-gray-600"
                      htmlFor={order.label}
                    >
                      {order.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid xs={9}>
            <div className="space-y-5 mt-4">
            {[1,1,1,1].map((ele,index)=>{
            return <OrderCard key={index}/>
           })}
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
