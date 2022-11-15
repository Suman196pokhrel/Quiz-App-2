import * as React from 'react'
import Box from "@mui/material/Box"
import { AppBar, Button, IconButton, Toolbar, Typography, Badge } from '@mui/material'
import{Menu, Mail, Notifications,AccountCircle} from '@mui/icons-material'

const PrimaryAppBar = () => {
  return (
    <Box 
    sx={{
      flexGrow:1
    }}
    >
      <AppBar position='static'>
        <Toolbar>
          {/* Left */}
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label='menu'
            sx={{mr:2}}
            >
              <Menu />
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
            <IconButton size='large' color='inherit' aria-label='notification'>
              <Badge color='error'>
                <AccountCircle />
              </Badge>
            </IconButton>
          </Box>
            

        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default PrimaryAppBar