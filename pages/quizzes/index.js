import { Grid,Paper, } from '@mui/material';
import { Box } from '@mui/system';
import React,{useState} from 'react'
import QuizCard from '../../components/QuizCard';
import Quizzes from "../../data/ListOfQuizzes"
import { useRouter } from 'next/router';


const QuizId = ({data}) => {

  const router = useRouter()

  const handleQuizCard = (id,data)=>{
    router.push({
      pathname:`/quizzes/${id}`})
  }



  return (
  <Box>

      <Grid container spacing={4}>
        {data.map((quiz)=>(
          <Grid item key={quiz.id} xs={12} md={4} lg={3} sx={{cursor:"pointer"}} onClick={()=>handleQuizCard(quiz.id,quiz)}>
            <QuizCard  data={quiz}/>
          </Grid>
              
          ))} 
      </Grid>

    </Box>
  )
}

export default QuizId;

export async function getStaticProps(){
  return {
    props:{
      data:Quizzes
    }
  }
}
