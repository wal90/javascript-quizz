import { IconButton, Stack, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Card } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useQuestionsStore } from "./store/questions";
import { type Question as QuestionType} from "./types";

const Question = ({ info }: { info: QuestionType }) => {
    return (
        <Card variant='outlined' sx={{ textAlign: 'left'}}>
            <Typography variant='h5'>
                {info.question}
            </Typography>
 
            <SyntaxHighlighter language='javascript' style={gradientDark}>
                {info.code}
            </SyntaxHighlighter>

            <List sx={{ bgColor: '#333'}}>
                {info.answers.map((answer, index) => (
                    <ListItem key={index}>
                        <ListItemButton>
                            <ListItemText primary={answer}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Card>
    )
}
export const Game = () => {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)

    const questionInfo = questions[currentQuestion]

    return (
        <>
        <Question info={questionInfo} />
        </>
    )
}