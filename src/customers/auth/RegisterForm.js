import { TextField,Button,Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const navigate = useNavigate()

    const handleSubmit = (event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget) 

    const userData = {
        firtname:data.get('firstname'),
        lastnamename:data.get('lastname'),
        email:data.get('email'),
        password:data.get('password'),
    }
    console.log(userData,"data")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              require
              id="firstname"
              name="firstname"
              label="firstname"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              require
              id="lastname"
              name="lastname"
              label="lasname"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              require
              id="email"
              name="email"
              label="email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              require
              id="password"
              name="password"
              label="password"
              fullWidth
              autoComplete="giveen-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              classname="bg-[#9155FD] w-full"
              type="submit"
              varient="contained"
              size="large"
              sx={{ padding: "2px" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <div className="py-3 flex items-center">
            <p>If you already have an account?</p>
            <Button onClick={()=>navigate('/login')} classname="ml-5">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
