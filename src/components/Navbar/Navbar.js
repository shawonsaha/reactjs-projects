import React from 'react'
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// import App from '../../App';
// import Authentication from '../Pages/Authentication/Authentication'
// import Database from '../Pages/Database/Database'
// import Storage from '../Pages/Storage/Storage'
// import Hosting from '../Pages/Hosting/Hosting'
// import Function from '../Pages/Function/Function'
// import MachineLearning from '../Pages/Machine-Learning/MachineLearning'

import { menuNavbarItems } from './const/NavbarItems';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/authentication",
//     element: <Authentication/>,
//   },
//   {
//     path: "/database",
//     element: <Database/>,
//   },
//   {
//     path: "/storage",
//     element: <Storage/>,
//   },
//   {
//     path: "/hosting",
//     element: <Hosting/>,
//   },
//   {
//     path: "/function",
//     element: <Function/>,
//   },
//   {
//     path: "/machine-learning",
//     element: <MachineLearning/>,
//   },
// ]);

const drawerWidth = 240;

const Navbar = () => {
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#101F33',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuNavbarItems.map((text, index) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:'white'}}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.lable} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Navbar