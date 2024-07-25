import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./Todos.Slice";

export const MyStore =  configureStore({
    reducer : {
        TodoReducer,
    }
})