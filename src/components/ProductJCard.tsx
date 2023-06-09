import { Typography,Card, CardMedia,CardContent,CardActions,Button} from "@mui/material"


function ProductCard() {
  
  return (
    <Card sx={{ maxWidth: 300 }} style={{marginRight:"10px",marginTop:"10px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
