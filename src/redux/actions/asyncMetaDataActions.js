import axios from "axios"
import { token, url_base_metadata } from "../services/endpoints"
import { store } from "../store"
import { GET_METADATA_FAILED, GET_METADATA_START, GET_METADATA_STORE, GET_METADATA_SUCCESS } from "./typeActions"

const getMetaDataStart = () =>{
    return{
        type:GET_METADATA_START
    }
}

const getMetaDataSuccess= (data) =>{
    return {
        type: GET_METADATA_SUCCESS,
        data: data
    }
}

const getMetaDataFailed = (error) =>{
    return{ 
        type: GET_METADATA_FAILED,
        error: error
    }
}

const getMetaDataStore = (data) =>{
    return{
        type: GET_METADATA_STORE,
        data: data
    }
}

export const getMetaData = () =>{
    return (dispatch) =>{
        dispatch(getMetaDataStart());
        axios.get(url_base_metadata + token)
        .then(data => {
            console.log(data)
            storeMetaData()
            dispatch(getMetaDataSuccess(data.data.bmx.series))
        })
        .catch(error =>{
            console.log(error)
            dispatch(getMetaDataFailed({message: error}))
        })
    }
}

export const storeMetaData = () =>{
    return dispatch => {
        let data = store.getState()
        dispatch(getMetaDataStore(data.metaDataReducer.data))
        data = store.getState();
        localStorage.setItem('MetaData_Graphics',JSON.stringify(data.metaDataReducer))
        console.log("dispaching storage")
    }
}

export const getMetaDataFromStore = () =>{
    return dispatch =>{
        dispatch(getMetaDataStart())
        const data = JSON.parse(localStorage.getItem('MetaData_Graphics'))
        if (data && data.stored){
            dispatch(getMetaDataSuccess(data.data))
        }else{
            const error = {
                message: "Error al obtener datos de localstorage"
            }
            dispatch(getMetaDataFailed(error))
        }
    }
}