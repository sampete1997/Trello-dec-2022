import {isOpen,createNameMethod} from "../actions/Actions"
const initialState = {
    createName : '',
    isModalOpen: false
}

function modalReducer(state = initialState, action) {

    switch (action.type) {

        case isOpen:
            return { isModalOpen:true}

        case createNameMethod:
            return { createName: action.payload }

        default:
            return state
    }
}

export default modalReducer