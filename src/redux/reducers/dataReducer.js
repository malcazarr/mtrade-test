import { GET_DATA_FAILED, GET_DATA_START, GET_DATA_STORE, GET_DATA_SUCCESS } from "../actions/typeActions";

const initialState = {
    data: null,
    loading: false,
    error: null,
    saved: false,
    stored:false
}

export default function dataReducer(state = initialState, action){
    switch(action.type){
        case GET_DATA_START:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null,
                saved: true,
                stored: false
            }
        case GET_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                saved: false,
                stored: false
            }
        case GET_DATA_STORE:
            return{
                ...state,
                loading:false,
                data: action.data,
                saved: true,
                stored: true,
            }
        default:
            return state
    }
}