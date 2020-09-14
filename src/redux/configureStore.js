import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
//we can apply middleware to enhance redux store behavior.
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; //middleware that warns us if we accidentaly
//mutate any state
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) //we need to invoke the function
    //on apply middleware we can add as many pices of middleware as we want
  );
}
