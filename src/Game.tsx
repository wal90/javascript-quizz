import { Typography, List, ListItem, ListItemButton, ListItemText, IconButton, Stack } from "@mui/material";
import { Card } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useQuestionsStore } from "./store/questions";
import { type Question as QuestionType} from "./types";
import { ArrowBackIosNew } from "@mui/icons-material";


//funcion que se crea una vez
const getBackgroundColor = (info: QuestionType, index: number) => {
    const { userSelectedAnswer, correctAnswer } = info

    // usuerio no ha seleccionado nada todavia
    if (userSelectedAnswer == null) return 'transparent'
    // si ya selecciono pero la solución es incorrecta
    if ( index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
    // si es la solución correcta
    if (index === correctAnswer) return 'green'
    // si esta es la selección del usuario pero no es correcta
    if (index === userSelectedAnswer) return 'red'
    // si no es ninguna de las anteriores

    return 'transparent'
}

const Question = ({ info }: { info: QuestionType }) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)

    // es una funcion que genera otra funcion 
    const createHandleClick = (answerIndex: number) => () => {
        selectAnswer(info.id, answerIndex)
    }

    return (
        <Card variant='outlined' sx={{ textAlign: 'left', marginTop:4 }}>
            <Typography variant='h5'>
                {info.question}
            </Typography>
 
            <SyntaxHighlighter language='javascript' style={gradientDark}>
                {info.code}
            </SyntaxHighlighter>

            <List sx={{ bgcolor: '#333'}} disablePadding>
                {info.answers.map((answer, index) => (
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton 
                        disabled={info.userSelectedAnswer !== null}
                        onClick={createHandleClick(index)}
                        sx={{ backgroundColor : getBackgroundColor(info, index)}}>
                            <ListItemText primary={answer} sx={{ textAlign: 'center' }}/>
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
    const goNextQuestion = useQuestionsStore (state => state.goNextQuestion)
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

    const questionInfo = questions[currentQuestion]

    return (
        <>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
            <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
                <ArrowBackIosNew />
            </IconButton>
        </Stack>
        <Question info={questionInfo} />
        </>
    )
}