import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
// import { AuthReducer } from "./redux/reducers/Auth";

const middleware = [thunk];

const initialState = {
  sidebarShow: 'responsive',
  asideShow: false,
  darkMode: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const reducer = combineReducers({
   nav: changeState,
  // auth: AuthReducer,
});


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store
