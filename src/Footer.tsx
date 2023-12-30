import { useQuestionsStore } from "./store/questions"


const useQuestionData = () => {
    const questions = useQuestionsStore(state=> state.questions)

    let correct = 0
    let incorrect = 0
    let unanswered = 0

    questions.forEach(question => {
        const { userSelectedAnswer, correctAnswer } = question

        if (userSelectedAnswer == null) unanswered++
        else if (userSelectedAnswer === correctAnswer) correct++
        else incorrect++
    })

    return { correct, incorrect, unanswered }
}

export const Footer = () => {
   
    return (
        <footer style={{ marginTop: '16px '}}>
            <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>

        </footer>
    )
}