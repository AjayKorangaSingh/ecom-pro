import { StepLabel, Stepper,Step } from "@mui/material";
const Tracker = ({ activeStep }) => {
  const steps = [
    "Placed",
    "Order Confirmed",
    "Shipping",
    "Out Of Delivery",
    "Delivered",
  ];
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((ele) => {
          return (
            <Step>
              <StepLabel sx={{ color: "#91555FD", fontSize: "24px" }}>
                {ele}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default Tracker;
