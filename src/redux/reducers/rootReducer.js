import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import dataReducer from "./dataReducer";
import metaDataReducer from "./metaDataReducer";

export default combineReducers({
    userAuthReducer, dataReducer, metaDataReducer
})