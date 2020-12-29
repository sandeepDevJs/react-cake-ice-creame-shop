import { createStore, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer"
import  iceCreameReducer  from "./iceCreame/reducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreameReducer
})
const store = createStore(rootReducer)

export default store