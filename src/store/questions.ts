import { create } from "zustand";
import { type Question } from "../types"

interface State {
    questions: Question[]
}