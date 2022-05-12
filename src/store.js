import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { reducers as productMain } from "./pages/Product";

const combine = combineReducers({
    product:productMain,
})

export const store = createStore(combine, applyMiddleware(thunk, logger));

