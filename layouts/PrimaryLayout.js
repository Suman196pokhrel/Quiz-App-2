import React,{useState} from 'react'
import { Box } from '@mui/material'
import PrimaryAppBar from '../components/PrimaryAppBar'
import PrimaryDrawer from '../components/PrimaryDrawer'

const PrimaryPayout = ({children}) => {

  const [toggleDrawer, setToggleDrawer] = useState(false)


  return (
    <Box sx={{
      
    }}>

      {/* App bar and Nav components  */}
      <Box sx={{display:'flex'}}>
           <PrimaryDrawer openDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer}/>
           <PrimaryAppBar  setToggleDrawer={setToggleDrawer}/>
         
      </Box>

      {/* Main Content  */}
      <Box sx={{
        backgroundColor:"lightblue",
        padding: '55px 15px 0px 15px',
        height:"100vh"
        }}>
        {children}
      </Box>



    </Box>
    
  )
}

export default PrimaryPayout