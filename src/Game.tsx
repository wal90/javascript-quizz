import { IconButton, Stack } from "@mui/material";
import { Card } from "@mui/material"
import { useQuestionsStore } from "./store/questions";
import { type Question as QuestionType} from "./types";

const Question = ({ info }: { info: QuestionType }) => {
    return (
        <Card variant='outlined'>

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