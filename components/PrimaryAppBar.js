import React,{useState} from 'react'
import Box from "@mui/material/Box"
import { AppBar, Button, IconButton, Toolbar, Typography, Menu ,Badge, MenuItem} from '@mui/material'
import{Mail, Notifications,AccountCircle} from '@mui/icons-material'
import MenuIcon from "@mui/icons-material/Menu"


const PrimaryAppBar = ({setOpenDrawer}) => {

  // for handeling mini-menus 
  const [anchorEl, setAnchorEl] = useState(null)


  const handleMenu = (e)=>{
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e)=>{
    setAnchorEl(null)
  }

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  return (
    <Box 
    sx={{
      flexGrow:1
    }}
    >
      <AppBar position='fixed' >
        <Toolbar variant='dense'>
          {/* Left */}
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label='menu'
            onClick={handleDrawerOpen}
            sx={{mr:2}}
            >
              <MenuIcon />
            </IconButton>

          {/* Mid  */}
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
              PowerPrep
            </Typography>
          
          {/* Right  */}
          <Box sx={{flexGrow:1}} />
          <Box
          sx={{
            display:{xs:'flex',md:'flex'}
          }}
          >
            <IconButton size='large' color='inherit' aria-label='notification'>
              <Badge badgeContent={7} color='error'>
                <Mail />
              </Badge>
            </IconButton>
            <IconButton size='large' color='inherit' aria-label='notification'>
              <Badge badgeContent={2} color='error'>
              <Notifications />
              </Badge>
            </IconButton>
            <IconButton size='large' color='inherit' aria-label='notification' onClick={handleMenu}>
              <Badge color='error'>
                <AccountCircle />
              </Badge>
            </IconButton>
            
            {/* mini Menu  */}
            <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
          </Box>
            

        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default PrimaryAppBar