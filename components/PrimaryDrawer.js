import { Divider, Drawer, IconButton, List,ListItem, ListItemButton , ListItemText} from '@mui/material'
import React from 'react'
import {styled,useTheme} from '@mui/material/styles'
import {Close, Inbox,Mail} from '@mui/icons-material'
import ListItemIcon from '@mui/material/ListItemIcon';

const drawerWidth = 200


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PrimaryDrawer = ({openDrawer, setOpenDrawer}) => {

  const handleDrawerClose =(e)=>{
    setOpenDrawer(false)
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
    variant='persistent'
    anchor='left'
    open={openDrawer}
    >
      <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <Close />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:"#1063eb"}}>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color:"#1063eb"}}>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        

    </Drawer>
  )
}

export default PrimaryDrawer