import { UpdateCards,getCardDataObject,loader,loaderOn} from "../actions/Actions"

const initialState = {
    cardDataObject: []
}

function cardReducer(state = initialState, action) {

    switch (action.type) {

        case UpdateCards:
            return {
                ...state, "updateCards": Math.random()
            }
        case getCardDataObject:
            console.log("cardDataObject",state.cardDataObject)
            return {
                ...state, [action.id] : action.payload
            }
        case loader:
            if(action.payload==loaderOn){
            return {
                ...state, [loader] : true
        }
            }else{
                return {
                    ...state, [loader] : false
                }
            }

        default:
            return state
    }
}

export default cardReducer