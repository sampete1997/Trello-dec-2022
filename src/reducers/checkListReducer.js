import {checkListLoad, getCheckListItems, isOpenCard, updateCheckList} from "../actions/Actions"
const initialState = {
    isModalOpen: "false",
}

function checkListReducer(state = initialState, action) {

    switch (action.type) {

        case isOpenCard:
            if(action.isOpen=="true") {
                return {isModalOpen: "true"}
            }else{
                return {isModalOpen: "false"}
            }

        case getCheckListItems:
            return { ...state, [action.checkListId]: action.payload }

       case updateCheckList:
            return { ...state, [checkListLoad]: Math.random() }

        default:
            return state
    }
}

export default checkListReducer