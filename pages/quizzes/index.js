import { Box } from '@mui/system';
import React,{useState} from 'react'
import QuizCard from '../../components/QuizCard';
import Quizzes from "../../data/tests"

const QuizId = ({data}) => {

  return (<Box>

        {data.map((quiz)=>(
            <QuizCard key={quiz.id} data={quiz}/>
        ))} 
    
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
