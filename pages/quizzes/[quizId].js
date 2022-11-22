import { Box } from '@mui/system';
import React,{useEffect, useState} from 'react'
import { useRouter, withRouter } from 'next/router';
import Tests from "../../data/tests"
import Quizzes from "../../data/ListOfQuizzes"



const QuizId = ({data}) => {    

  const router = useRouter()
  const [SingleTest, setSingleTest] = useState(null)

  return (<Box>

        <Box>
            <h1>{data.title}</h1>
        </Box>
    
    </Box>
  )
}

export default withRouter(QuizId);

export async function getStaticProps(context){
  const {quizId} = context.params
  const test = await Tests[quizId-1]
  return {
    props:{
      data:test
    }
  }
}


export function getStaticPaths(){
  const paths = Quizzes.map(quiz=>{
    return {params:{quizId:`${quiz.id}`}}
  })

  return {
    paths:paths,
    fallback:false
  }
}
