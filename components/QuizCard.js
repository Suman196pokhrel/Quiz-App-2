
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';

const QuizCard = ({data}) => {
  const router = useRouter()

  const handleCardClick = (e)=>{
    router.push(`/quizzes/${data.id}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
      onClick={handleCardClick}
      >
      <CardMedia
        component="img"
        height="140"
        image="https://th.bing.com/th/id/R.b45f0977921743497921df6c3bedb46e?rik=VGYHj%2brsR199Xg&pid=ImgRaw&r=0&sres=1&sresct=1"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
            {data.category.map((cat)=>(
                <Chip key={cat} label={cat} color="primary" size='small' variant='outlined'/>
            ))}
            </Stack>
            <Stack direction="row" spacing={1}>
                <Chip label={data.difficulty} color="error" size='small' variant='contained'/>
                <Chip label={`Qsns : ` + data.total_questions } color="info" size='small' variant='contained'/>
            </Stack>
        </Stack>
        

      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default QuizCard