import { Button } from "@mui/material"

export const Start = () => {
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
    return (
        <Button onClick={() => {}} variant="contained">
            ¡Empezar!
        </Button>
    )
}