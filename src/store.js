import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { reducers as daganganMain } from "./pages/Dagangan/__Main";

const combine = combineReducers({
    dagangan:daganganMain,
})

export const store = createStore(combine, applyMiddleware(thunk, logger));

