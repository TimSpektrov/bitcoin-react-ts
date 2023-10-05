import {Reducer} from "react";
import {
    CHANGE_CURRENCY,
    CHANGE_HEADING,
    CHANGE_PERIOD,
    ChangeCurrencyAction,
    ChangeHeadingAction, ChangePeriodAction
} from "./action.ts";
import {initialState} from "../index.ts";

export type MenuState = {
    choiceHeading: string,
    choiceCurrency: string,
    choicePeriod: string,
}

export type MenuChangeActions = ChangeHeadingAction
    | ChangeCurrencyAction
    | ChangePeriodAction

export const menuReducer: Reducer<MenuState, MenuChangeActions> = (state = initialState.menu, action) => {
    switch (action.type) {
        case CHANGE_HEADING:
            return {
                ...state,
                choiceHeading: action.choiceHeading
            }
        case CHANGE_CURRENCY:
            return {
                ...state,
                choiceCurrency: action.choiceCurrency
            }
        case CHANGE_PERIOD:
            return {
                ...state,
                choicePeriod: action.choicePeriod
            }
        default:
            return state;
    }
}
