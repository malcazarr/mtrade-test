import axios from "axios"
import { token, url_base_data } from "../services/endpoints"
import { store } from "../store"
import { GET_DATA_FAILED, GET_DATA_START, GET_DATA_STORE, GET_DATA_SUCCESS } from "./typeActions"

const getDataStart = () =>{
    return{
        type:GET_DATA_START
    }
}

const getDataSuccess= (data) =>{
    return {
        type: GET_DATA_SUCCESS,
        data: data
    }
}

const getDataFailed = (error) =>{
    return{ 
        type: GET_DATA_FAILED,
        error: error
    }
}

const getDataStore = (data) =>{
    return{
        type: GET_DATA_STORE,
        data: data
    }
}

export const getData = () =>{
    return (dispatch) =>{
        dispatch(getDataStart());
        axios.get(url_base_data + token)
        .then(data => {
            console.log(data)
            dispatch(getDataSuccess(data.data.bmx.series))
        })
        .catch(error =>{
            console.log(error.message)
            dispatch(getDataFailed({message: error.message}))
        })
    }
}

export const storeData = () =>{
    return dispatch => {
        let data = store.getState()
        dispatch(getDataStore(data.dataReducer.data))
        localStorage.setItem('Data_Graphics',JSON.stringify(data.dataReducer))
        console.log("dispaching storage")
    }
}

export const getDataFromStore = () =>{
    return dispatch =>{
        dispatch(getDataStart())
        const data = JSON.parse(localStorage.getItem('Data_Graphics'))
        console.log(data)
        if (data && data.saved){
            dispatch(getDataSuccess(data.data))
        }else{
            const error = {
                message: "Error al obtener datos de localstorage"
            }
            dispatch(getDataFailed(error))
        }
    }
}