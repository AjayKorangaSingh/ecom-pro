import {
    Avatar,
    Box,
    Grid,
    Button,
    TextField,
  } from "@mui/material";
  import { AddressCard } from "./AddressCard";
  
  export function DeliveryAddressForm() {
    const fields = [
      { name: "firstName", label: "First Name" },
      { name: "lastName", label: "Last Name" },
      { name: "address", label: "Address" },
      { name: "city", label: "City" },
      { name: "zip", label: "Zip Code" },
      { name: "phoneNumber", label: "Phone Number" },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const address = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        address: data.get("address"),
        city: data.get("city"),
        zip: data.get("zip"),
        phoneNumber: data.get("phoneNumber"),
      };
    };
  
    return (
      <div>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            lg={5}
            className="border rounded-0-md shadow-md h-[30rem] overflow-y-scroll"
          >
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard />
              <Button
                sx={{ mt: 2, bgColor: "RGB(145,85,253)" }}
                size="large"
                variant="contained"
              >
                Deliver Here!
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {fields.map((field) => (
                    <Grid item xs={12} sm={6} key={field.name}>
                      <TextField
                        required
                        id={field.name}
                        name={field.name}
                        label={field.label}
                        fullWidth
                        autoComplete={field.name}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12} sm={6}>
                    <Button
                      sx={{ mt: 2, bgColor: "RGB(145,85,253)" }}
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
  