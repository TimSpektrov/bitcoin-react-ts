import {heading} from "../constants/constantsMenu.ts";
import {MenuChangeActions, menuReducer, MenuState} from "./menu/reducer.ts";
import {FSYM, PERIOD} from "../constants/API.ts";
import {RequestActions, requestReducer, RequestState} from "./requests/reducer.ts";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export type RootState = {
    menu: MenuState,
    request: RequestState,
}

export const initialState: RootState = {
    menu: {
        choiceHeading: heading[0],
        choiceCurrency: FSYM[0],
        choicePeriod: PERIOD[0].name,
    },
    request: {
        loading: false,
        data: [],
        error: ''
    }
}
    export type AllActions = MenuChangeActions | RequestActions;
export const rootReducer = combineReducers({
    menu: menuReducer,
    request: requestReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
