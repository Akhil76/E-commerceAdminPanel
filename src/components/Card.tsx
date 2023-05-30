import { Typography,Grid} from "@mui/material"


function Card() {
  
  return (
    <Grid item xs={12} sm={6} md={4} style={{ marginTop:"10px",}}>
        <div style={{
          height:"200px",
          borderRadius:"8px",
          background:"red",
          marginRight:"10px"
          }}
          >
            <Typography variant='h6' style={{padding:"10px"}}>Name</Typography>
          </div>
        </Grid>
  )
}

export default Card
