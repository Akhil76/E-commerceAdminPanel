import { Typography } from "@mui/material"


function Card() {
  
  return (
    <div 
        style={{
          height:"150px",
          width:"350px",
          borderRadius:"8px",
          background:"red",
          margin:"10px"
          }}
          >
            <Typography variant='h6' style={{padding:"10px"}}>Name</Typography>
        </div>
  )
}

export default Card
