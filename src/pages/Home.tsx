import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Card from '../components/Card';
import Breadcrumb from '../components/Breadcrumb';





function Home() {

  return (
    <div>
      <Breadcrumb />
      <Grid container>
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  )
}


const StyledButton = styled('button')({
  // CSS properties
  color: 'blue',
  backgroundColor: 'green',
  padding: '10px',
  borderRadius: '5px',
});
const MyDiv = styled('div')({
  // CSS properties
  color: 'blue',
  backgroundColor: 'yellow',
  width: "100px",
  height: "100px"

});

export default Home
