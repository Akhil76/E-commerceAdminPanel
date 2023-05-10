import { AppBar,Typography,Toolbar,Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon,{ MenuProps } from '@mui/material/Menu';
import ListRoundedIcon from '@mui/material';


const drawerWidth = 240;

function Header(props:any){
  
  return (
    <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
     <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={props.onClick}
        >
         Menu
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Admin Dashboard
        </Typography>
        <div style={{marginLeft:"auto"}}>
        <Button 
        color="inherit" 
        style={{textTransform:"none"}}
       
        >
            Logout
        </Button>
      </div>
      </Toolbar>
  </AppBar>
  )
}

export default Header
