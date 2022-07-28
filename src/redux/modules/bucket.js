import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'content',
    initialState:[{id: Math.random()*1000,
        text:"밥",
        subText:"밥먹기",
        completed : false},
    ],
    reducers:{
        addTodo:(state,action) =>{ // 추가 기능
            const newTodo = {
                id:Math.random()*1000,
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
        }
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