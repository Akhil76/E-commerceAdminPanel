import { Grid,Typography } from '@mui/material'
import ProductCard from '../components/ProductJCard'
import Breadcrumb from '../components/Breadcrumb'

function Products() {
  
  return (
    <div>
      <Breadcrumb/>
      <Grid container>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Grid>
    </div>
  )
}

export default Products
