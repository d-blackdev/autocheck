import { combineReducers } from "redux";
import {getPermitDetailReducer,getPermitsReducer} from './reducer/index'


const rootReducer = combineReducers({
  getPermitDetail: getPermitDetailReducer,
  getPermits: getPermitsReducer,
});


export default rootReducer;