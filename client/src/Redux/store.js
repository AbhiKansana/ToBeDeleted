// NOTE: use this store variable to create a store.

import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import { mainReducer } from './reducer';
import { editReducer } from './EditReducer';


const rootReducer = combineReducers({
    countries : mainReducer,
    editInfo :editReducer
})

const store = createStore(rootReducer,
    composeWithDevTools(
        (applyMiddleware(thunk))
    )
)  

export default store


// export const store = {};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}



