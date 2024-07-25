import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("Todos/getTasks",async function(){
    try {
        const options = {
            url : "http://localhost:5000/tasks",
            method : "GET"
        }
        const {data} = await axios.request(options)
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
})

export const deleteTasks = createAsyncThunk("Todos/deleteTasks" , async function({id}){
    try {
        const options = {
            url: `http://localhost:5000/tasks/${id}`,
            method: "DELETE"
          };
          const {data} = await axios.request(options)
          console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
})

export const  addTask = createAsyncThunk("Todos/addTask" , async function({values}){
try {
    const options = {
        url : `http://localhost:5000/tasks`,
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            id: Math.random().toString(36).substring(2, 9),...values
        })
    }
    const {data} = await axios.request(options)
    console.log(data);
    return data 
} catch (error) {
    
}
})
const TodoSlice = createSlice({
    name : "Todos",
    initialState : {
        data : [] ,
        isLoading : false,
        addTask : null
    },
    reducers : {
        setData : function(previousState,action){
         previousState.data = [...previousState.data , previousState.addTask];
         console.log(previousState.data);
        }
    }
    ,
    extraReducers : function(bulider){
        bulider.addCase(getTasks.fulfilled , function(previousState , action){
            previousState.data = action.payload;
            previousState.isLoading = false
            console.log("get Task Done");
        })
        bulider.addCase(getTasks.pending,function(previousState , action){
            console.log("get Task pending");
             previousState.isLoading = true
        })
        bulider.addCase(getTasks.rejected,function(){
            console.log("get Task rejected");
        })
        bulider.addCase(deleteTasks.fulfilled,function(previousState , action){
            previousState.data = previousState.data.filter(task => task.id !== action.payload.id);
           console.log("Task deleted");
        })
        bulider.addCase(deleteTasks.pending,function(){
            console.log(" Task deleted is  Pending");
        })
        bulider.addCase(deleteTasks.rejected,function(){
            console.log(" Task deleted is rejected" );
        })
        bulider.addCase(addTask.fulfilled,function(previousState , action){
            previousState.addTask = action.payload
            console.log("Add Task Done");
        })
        bulider.addCase(addTask.pending,function(){
            console.log("add task pending");
        })
        bulider.addCase(addTask.rejected , function(){
            console.log("add task rejected");
        })
    }
})

export const TodoReducer = TodoSlice.reducer;
export const TodoActions = TodoSlice.actions;