import { Typography } from '@mui/material';
import { styled } from '@mui/system';





function Home() {
 
  return (
    <div>
      <StyledButton>ReadMe</StyledButton>
      <Typography>Home page</Typography>
      <Typography>Home page</Typography> 
      <Typography>Home page</Typography>
      <MyDiv></MyDiv>
      
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
  width:"100px",
  height:"100px"

});

export default Home
