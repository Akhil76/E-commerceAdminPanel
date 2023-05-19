import Dashboard from '@mui/icons-material/Dashboard';
import AddBox from '@mui/icons-material/AddBox';
import ExposureIcon from '@mui/icons-material/Exposure';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 


export const SidebarDatas = [
    {
        title: "Dashboard",
        icon :<Dashboard/> ,
        Link : "/"
    },
    {
        title: "Add Product",
        icon :<AddBox/> ,
        Link : "/addproduct" 
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