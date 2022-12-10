import {legacy_createStore as createStore,combineReducers} from 'redux'
import boardReducer from "./reducers/boardReducer";
import listReducer from "./reducers/listReducer";
import modalReducer from "./reducers/modalxReducer";

const rootReducer = combineReducers({
    board:boardReducer,
    lists:listReducer,
    modalx:modalReducer,

})

const store = createStore(rootReducer)
export default store