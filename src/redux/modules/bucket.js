import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = [{
    id: nanoid(),
    text:"밥",
    subText:"밥먹기",
    completed : false
}]
const todoSlice = createSlice({
    name:'content',
    initialState:initialState,
    reducers:{
        addTodo:(state,action) =>{ // 추가 기능
            const newTodo = {
                id: nanoid(),
                text:action.payload.text,
                subText:action.payload.subText,
                completed:false,
            };
        state.push(newTodo)
        },
        toggleComplete:(state,action) => { // 완료 기능
            const index = state.findIndex(
                (todo)=>todo.id === action.payload.id
            )
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state,action) => {
            return state.filter((states)=>states.id !== action.payload.id)
        },
        // getId: (state,action) =>{
        //     if (state.id == action.payload.id){
        //         console.log('응애같아요')
        //     }
            
        // }
    }
})

export const { addTodo, toggleComplete, deleteTodo} =todoSlice.actions
export default todoSlice.reducer;

// (구)

// Reducer
// export default function reducer(state = init, action = {}) {
//     switch (action.type) {
//         case "todo/CREATE":{
//             const todosList = [...state.content, action.id]
//             return {content:todosList}
//         }
//         default:
//             return state;
//     }
// }


// Action Creators
// export function createTodoId(id) {
//     return {
//         type: CREATE,
//         id:id,
//     };
// }

// export function createWidget(widget) {
//     return {
//         type: CREATE,
//         widget
//     };
// }

// export function updateWidget(widget) {
//     return {
//         type: UPDATE,
//         widget
//     };
// }

// export function removeWidget(widget) {
//     return {
//         type: REMOVE,
//         widget
//     };
// }