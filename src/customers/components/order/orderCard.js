import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
export function OrderCard() {
  const navigation = useNavigate()

  return (
    <div className="p-5 shadow-lg hover:shadow-2xl border" onClick={()=>navigation('/account/order/2')}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://images.pexels.com/photos/26712791/pexels-photo-26712791/free-photo-of-monkey-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="card"
            />
            <div className="ml-5 space-y-2">
              <p className="">Mens Slime Mid-Size Rrange</p>
              <p className="opacity-50 text-xs font-semibold">Sizee:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Red</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 text-sm"
                />
                <span> Delivery On march 2023</span>
              </p>
              <p className="text-sx">Your Item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span> Expected Delivery On 30 march 2023</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
