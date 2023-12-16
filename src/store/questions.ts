import { create } from "zustand";
import { type Question } from "../types"

interface State {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: (limit: number) => void
}

export const useQuestionsStore = create<State>(() => {
    
})