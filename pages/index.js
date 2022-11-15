import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import PrimaryAppBar from "../components/PrimaryAppBar";
import PrimaryDrawer from "../components/PrimaryDrawer";


export default function Home() {

  const [toggleDrawer, setToggleDrawer] = useState(false)


  return (
    <Box>
        <Box sx={{display:'flex'}}>
          <CssBaseline />
           <PrimaryDrawer openDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer}/>
           <PrimaryAppBar  setToggleDrawer={setToggleDrawer}/>
         
        </Box>

    </Box>
  

    
  )
}
