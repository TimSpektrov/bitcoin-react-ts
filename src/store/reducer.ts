import {Reducer} from "react";
// import {AllChangeAction, CHANGE_CURRENCY, CHANGE_HEADING, CHANGE_PERIOD} from "./action.ts";
import {currency, heading, period} from "../constants/constantsMenu.ts";
import {MenuChangeActions, menuReducer, MenuState} from "./menu/reducer.ts";
import {CHANGE_CURRENCY, CHANGE_HEADING, CHANGE_PERIOD} from "./menu/action.ts";

export type RootState = {
    menu: MenuState,
}

export const initialState: RootState = {
    menu: {
        choiceHeading: heading[0],
        choiceCurrency: currency[0],
        choicePeriod: period[0],
    }
}

type AllAction = MenuChangeActions;

export const rootReducer: Reducer<RootState, AllAction> = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_HEADING:
        case CHANGE_CURRENCY:
        case CHANGE_PERIOD:
            return {
                ...state,
                menu: menuReducer(state.menu, action)
            }
        default:
            return state;
    }
}