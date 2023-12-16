import { create } from "zustand";
import { type Question } from "../types"

interface State {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: (limit: number) => Promise<void>
}

export const useQuestionsStore = create<State>((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,

        fetchQuestions: async (limit: number) => {
            set({
                questions: [
                    {
                        "id": 46,
                        "question": "¿Cuál es el resultado de la siguiente expresión?",
                        "code": "'2' + true",
                        "answers": [
                          "'2true'",
                          "'3'",
                          "3",
                          "Error"
                        ],
                        "correctAnswer": 0
                    }
                ]
            })
        }

    }

})