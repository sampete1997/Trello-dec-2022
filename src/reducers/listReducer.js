import {getListData, getListId, updateList} from "../actions/Actions"

const initialState = {
    listData: [{name:"solomon"},{name:"Lane"}],
}

function listReducer(state = initialState, action) {

    switch (action.type) {

        case getListData:
            return {
                ...state, listData : action.payload
            }

        case getListId:

            return {
                ...state,

                listId: action.payload
            }
        case updateList:
            return {
                ...state, [updateList]: Math.random()
            }

        default:
            return state
    }
}

export default listReducer