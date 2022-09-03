import TYPES from "../types"

const initialState = {
    token: "",
    tokenLogin:""
}

const dataRegister = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.POST_REGISTRASI:
            return{
                ...state,
                token: action.payload
            }
            case TYPES.POST_LOGIN:
                return{
                    ...state,
                    tokenLogin: action.payload
                }
        default:
            return state
    }
}

export default dataRegister