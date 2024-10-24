import { Avatar, Box, Grid, Rating } from "@mui/material"

const ProductReviewCard = ()=>{
    return(
        <div>
            <Grid container spacing={2} gap={3}>
              <Grid item={2} xs={1}>
                <Box>
                    <div className="mt-6">  <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"darkblue"}}/></div>
                </Box>
              </Grid>
              <Grid item sx={9}>
                <div className="ml-3">   <div className="space-y-2 mt-2">
                    <div>
                        <p className="spacing-y-3 ml-2 font-semibold text-lg">Ram</p>
                        <p className="spacing-y-3 ml-2">APRIL,22,2024</p>
                    </div>
                </div>
                <Rating value={4.5} name="half-rating" precision={.5}>
                    <p>lorem is asas has a cult behaviour</p>
                </Rating></div>
              </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard