import { Divider, Drawer, IconButton, List,ListItem, ListItemButton , ListItemText} from '@mui/material'
import React from 'react'
import {styled,useTheme} from '@mui/material/styles'
import {Close, Inbox,Mail, Home, Psychology, Settings} from '@mui/icons-material'
import ListItemIcon from '@mui/material/ListItemIcon';

const drawerWidth = 200

const ListItemButtonStyled = styled(ListItemButton)(({theme})=>({
  ':hover':{
    backgroundColor:'#e1e1e1',
    color:'black',
    transition:'0.3s'
  },
  
  
}))


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PrimaryDrawer = ({openDrawer, setToggleDrawer}) => {

  const handleDrawerClose =(e)=>{
    setToggleDrawer(false)
  }


  return (
    <Drawer
    sx={{
      width:drawerWidth,
      flexShrink:0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
      
    }}
    variant='temporary'
    anchor='left'
    open={openDrawer}
    onClose={handleDrawerClose}
    >
      <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <Close />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disablePadding >
              <ListItemButtonStyled>
                <ListItemIcon>
                   <Home/>
                </ListItemIcon>
                <ListItemText  primary={'Home'} />
              </ListItemButtonStyled>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButtonStyled >
                <ListItemIcon >
                   <Psychology />
                </ListItemIcon>
                <ListItemText primary={'Quizzes'} />
              </ListItemButtonStyled>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButtonStyled >
                <ListItemIcon >
                   <Settings />
                </ListItemIcon>
                <ListItemText primary={'Settings'} />
              </ListItemButtonStyled>
          </ListItem>
        </List>
        {/* <Divider /> */}     

    </Drawer>
  )
}

export default PrimaryDrawer