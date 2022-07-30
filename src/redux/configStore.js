// import { createStore, combineReducers } from "redux";
// import bucket from "./modules/bucket";
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./modules/bucket";

export default configureStore({
    reducer:{
        content:todoReducer,  
    },
})

//  (구)
// const roodReducer = combineReducers({bucket});

// const store = createStore(roodReducer);

// export default store;