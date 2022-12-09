import { getListName ,getListId} from "../actions/Actions"

const initialState = {

    listName: '',
    listId:''

}

function listReducer(state = initialState, action) {

    switch (action.type) {


        case getListName:

            return {
                ...state,

                listName: action.payload
            }

        case getListId:

            return {
                ...state,

                listId: action.payload
            }


        default:
            return state
    }
}

export default listReducer