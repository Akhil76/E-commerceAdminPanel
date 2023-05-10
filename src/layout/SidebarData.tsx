import Dashboard from '@mui/material';
import AddBox from '@mui/material';
import ExposureIcon from '@mui/material';
import SettingsIcon from '@mui/material';
import CategoryIcon from '@mui/material';
import ExpandMoreIcon from '@mui/material';
import ExpandLessIcon from '@mui/material'; 


export const SidebarDatas = [
    {
        title: "Dashboard",
        icon :<Dashboard/> ,
        Link : "/"
    },
    {
        title: "Create Account",
        icon :<AddBox/> ,
        Link : "/createaccount" 
    },
    {
        title: "Transactions",
        icon :<ExposureIcon/> ,
        Link : "/transaction"
    },
    {
        title: "Account Manager",
        icon :<CategoryIcon/> ,
        Link : "/accountmanager"    
    },
    {
        title: "Settings",
        icon :<SettingsIcon/>,
        Link:"/setting",
        ExpandMoreIcon:<ExpandMoreIcon/>,
        ExpandLessIcon:<ExpandLessIcon/>,
        subnav:[
            {
                title:"Categories",
                Link:"/admin/categories"
            },
            {
                title:"add category",
                Link:"/admin/addcategory"
            },
        ]
    
        },
]