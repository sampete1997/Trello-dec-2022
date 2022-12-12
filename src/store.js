import {legacy_createStore as createStore,combineReducers} from 'redux'
import boardReducer from "./reducers/boardReducer";
import listReducer from "./reducers/listReducer";
import modalReducer from "./reducers/modalxReducer";
import cardReducer from "./reducers/cardReducer";
const rootReducer = combineReducers({
    board:boardReducer,
    lists:listReducer,
    modalx:modalReducer,
    cards: cardReducer,

})

const store = createStore(rootReducer)
export default store