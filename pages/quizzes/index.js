import React from 'react'
import {
    Skeleton,
    Grid
} from "@mui/material"
import { Box, padding } from '@mui/system'
import QuizCard from '../../components/QuizCard'


const NoDataComp = ()=>{
    const skeletonArrray = Array.from({length:9}).fill(Math.floor(Math.random()*100))
    return(
        <Box
        sx={{width:"100%", padding:"3% 5% 0% 7%"}}
        >
            <Grid container spacing={5} direction="row" >
                {skeletonArrray.map((item)=>(
                    <Grid item key={item} >
                    <Skeleton animation="wave" variant="rounded" width={300} height={200} />
                    </Grid>
                ))
            }
                
            
            </Grid>
        </Box>
        
        )
}

const Quizzes = ({data}) => {
    
    if(data){
        return(
                <Grid container spacing={5} sx={{padding:"0 0 0 1%"}}>
                    {data.map((quiz)=>(
                        <Grid key={quiz.id}  item>
                                <QuizCard data={quiz}/>
                        </Grid>
                    ))}
                </Grid>
        )
    }else{
        return NoDataComp()
    }


    
}

export default Quizzes

export async function getStaticProps(){
    const data = await fetch("http://localhost:4000/listOfQuizzes").then(res=>res.json())
    
    return{
        props:{
            data:data
        }
    }
}