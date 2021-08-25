import { GET_METADATA_FAILED, GET_METADATA_START, GET_METADATA_STORE, GET_METADATA_SUCCESS } from "../actions/typeActions"

const initialState = {
    data: null,
    loading: false,
    error: null,
    saved: false,
    stored:false
}

export default function metaDataReducer(state = initialState, action){
    switch(action.type){
        case GET_METADATA_START:
            return {
                ...state,
                loading: true
            }
        case GET_METADATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null,
                saved: true,
                stored: false
            }
        case GET_METADATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                saved: false,
                stored: false
            }
        case GET_METADATA_STORE:
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