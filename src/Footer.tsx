import { Button } from "@mui/material"
import { useQuestionData } from "./hooks/useQuestionsData"

export const Footer = () => {

    const { correct, incorrect, unanswered } = useQuestionData()
   
    return (
        <footer style={{ marginTop: '16px '}}>
            <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
            <Button onClick={()=> reset()}>
                Resetear juego
            </Button>
        </footer>
    )
}