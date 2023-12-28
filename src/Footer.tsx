import { useQuestionsStore } from "./store/questions"

export const Footer = () => {
    const questions = useQuestionsStore(state=> state.questions)

    let correct = 0
    let incorrect = 0
    let unanswered = 0
    return (
        <footer style={{ marginTop: '16px '}}>
            <strong>{`✅ {}`}</strong>

        </footer>
    )
}