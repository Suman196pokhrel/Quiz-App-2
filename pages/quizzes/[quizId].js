import { Box } from '@mui/system';
import React,{useState} from 'react'
import useSWR from 'swr';


const dataFetcher  = async ()=>{
    const data = await fetch("/api/quizList").then(res=>res.json())
    return data
}


const QuizId = () => {

    const {data, err} = useSWR('QuizList',dataFetcher)  

    if (err) return <h1>{err}</h1>

    if (!data) return <h1>Loading . . .</h1>


  return (<Box>

        {data.map((quiz)=>(
            <Box key={quiz.id}>
                <h1>quiz.title</h1>
            </Box>
        ))} 
    
    </Box>
  )
}

export default QuizId;
