import {Reducer} from "react";
// import {AllChangeAction, CHANGE_CURRENCY, CHANGE_HEADING, CHANGE_PERIOD} from "./action.ts";
import {heading} from "../constants/constantsMenu.ts";
import {MenuChangeActions, menuReducer, MenuState} from "./menu/reducer.ts";
import {CHANGE_CURRENCY, CHANGE_HEADING, CHANGE_PERIOD} from "./menu/action.ts";
import {FSYM, PERIOD} from "../constants/API.ts";
import {RequestActions, requestReducer, RequestState} from "./requests/reducer.ts";
import {REQUEST_DATA, REQUEST_DATA_ERROR, REQUEST_DATA_SUCCESS} from "./requests/action.ts";

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

type AllAction = MenuChangeActions | RequestActions;

export const rootReducer: Reducer<RootState, AllAction> = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_HEADING:
        case CHANGE_CURRENCY:
        case CHANGE_PERIOD:
            return {
                ...state,
                menu: menuReducer(state.menu, action)
            }
        case REQUEST_DATA:
        case REQUEST_DATA_SUCCESS:
        case REQUEST_DATA_ERROR:
            return {
                ...state,
                request: requestReducer(state.request, action)
            }
        default:
            return state;
    }
}