import { Button } from "@mui/material"

export const Start = () => {
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

    const handleClick = ( {
        fetchQuestions()
    })
    return (
        <Button onClick={handleClick} variant="contained">
            ¡Empezar!
        </Button>
    )
}