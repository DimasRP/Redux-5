import { combineReducers } from 'redux';
import dataRegister from './authReducer';
import dataReducer from './dataReducer';


const rootReducer = combineReducers({
    dataReducer,
    dataRegister
})

export default rootReducer