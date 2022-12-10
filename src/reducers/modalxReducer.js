import {isOpen,createListNameMethod, createBoardNameMethod} from "../actions/Actions"
const initialState = {
    createBoardName : '',
    createListName : '',
    isModalOpen: false
}

function modalReducer(state = initialState, action) {

    switch (action.type) {

        case isOpen:
            return { isModalOpen:true}

        case createBoardNameMethod:
            return { createBoardName: action.payload }
        case createListNameMethod:
            return { createBoardName: action.payload }

        default:
            return state
    }
}

export default modalReducer