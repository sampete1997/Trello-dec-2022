import { getBoardData, getBoardId,getBoardName, getBoardListData, isCreate, UpdateRedux } from "../actions/Actions"
const initialState = {
    boardData: [],
    boardId: '',
    boardListData: [],
    isCreate: false,
    updateRedux: 0,
    boardName: ''
}

function boardReducer(state = initialState, action) {

    switch (action.type) {

        case getBoardData:
            return { ...state, boardData: action.payload }

        case getBoardId:
            return { ...state, boardId: action.payload }

        case getBoardListData:
            return {
                ...state,
                boardListData: action.payload
            }
        case isCreate:
            return {
                ...state,

                isCreate: action.payload
            }
        case getBoardName:
            return {
                ...state,
                boardName: action.payload
            }
        case 'updateRedux':
            return {
                    ...state,
                    updateRedux:state.updateRedux+1
                }

        default:
            return state
    }
}

export default boardReducer