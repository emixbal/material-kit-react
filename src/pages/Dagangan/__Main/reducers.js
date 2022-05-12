import { type } from './actions'

const initialState = {
    loading: false,
    angka:0
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case type.CHANGE_LOADING:
            return {
                ...state,
                loading: action.value,
            };
        case type.CHANGE_ANGKA:
            return {
                ...state,
                angka: action.value,
            };
        case type.RESET:
            return {
                ...initialState,
            };
        default:
            return state
    }
}

export default main
