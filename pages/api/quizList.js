import quizList from "../../data/ListOfQuizzes"

export default function handler(req,res){
    res.status(200).json(quizList)
}