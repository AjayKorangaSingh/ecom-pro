import { Grid, Typography } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ backgroundColor: "black" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">Company</Typography>
          <div><button className="pb-5" varient="h6" gutterBottom> About</button></div>
          <div> <button className="pb-5" varient="h6" gutterBottom> Blog</button></div>
         <div> <button className="pb-5" varient="h6" gutterBottom> Press</button> </div>
          <div>   <button className="pb-5" varient="h6" gutterBottom> News</button> </div>
       
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">Solution</Typography>
          <div><button className="pb-5" varient="h6" gutterBottom> About</button></div>
          <div> <button className="pb-5" varient="h6" gutterBottom> Blog</button></div>
         <div> <button className="pb-5" varient="h6" gutterBottom> Press</button> </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">Documentation</Typography>
          <div><button className="pb-5" varient="h6" gutterBottom> About</button></div>
          <div> <button className="pb-5" varient="h6" gutterBottom> Blog</button></div>
         <div> <button className="pb-5" varient="h6" gutterBottom> Press</button> </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">legal</Typography>
          <div><button className="pb-5" varient="h6" gutterBottom> About</button></div>
          <div> <button className="pb-5" varient="h6" gutterBottom> Blog</button></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
