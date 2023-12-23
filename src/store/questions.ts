import { create } from "zustand";
import { type Question } from "../types"

interface State {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: (limit: number) => Promise<void>
    selectAnswer: (questionId: number, answerIndex: number) => void
}

export const useQuestionsStore = create<State>((set, get) => {
    return {
        questions: [], // ----> initial state
        currentQuestion: 0,

        fetchQuestions: async (limit: number) => {
            const res = await fetch('http://localhost:5173/data.json')
            const json = await res.json()

            const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
            set({ questions })
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get()
            // usar el structuredClone para clonar el objeto
            const newQuestions = structuredClone(questions)
            // encontramos el indice de la pregunta
            const questionIndex = newQuestions.findIndex(q => q.id === questionId)
            // obtenemos la información de la pregunta
            const questionInfo = newQuestions[questionIndex]
            // averiguamos si el usuario ha seleccionado la respuesta correcta
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
            // cambiar esta información en la copia de la pregunta
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer:answerIndex
            }
            // actualizamos el estado
            set({ questions: newQuestions})
        }

    }

})