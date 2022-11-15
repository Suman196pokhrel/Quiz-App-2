import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import PrimaryAppBar from "../components/PrimaryAppBar";
import PrimaryDrawer from "../components/PrimaryDrawer";


export default function Home() {

  const [openDrawer, setOpenDrawer] = useState(false)


  return (
    <Box>
        <Box sx={{display:'flex'}}>
          <CssBaseline />
           <PrimaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
           <PrimaryAppBar  setOpenDrawer={setOpenDrawer}/>
         
        </Box>

    </Box>
  

    
  )
}
