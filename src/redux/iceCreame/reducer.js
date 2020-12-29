import { BUY_ICECREAME } from "./types";

const initialState =  {
    numOfIceCreams:20
}
const iceCreameReducer = (state=initialState, action)=>{
    switch (action.type) {
        case BUY_ICECREAME:return{
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreameReducer