import {Reducer} from "react";
import {AllChangeAction, CHANGE_CURRENCY, CHANGE_HEADING, CHANGE_PERIOD, ChangePeriodAction} from "./action.ts";
import {currency, heading, period} from "../constants/constantsMenu.ts";

export interface IDataItem {

}

export type RootState = {
    choiceHeading: string,
    choiceCurrency: string,
    choicePeriod: string,
}

const initialState: RootState = {
    choiceHeading: heading[0],
    choiceCurrency: currency[0],
    choicePeriod: period[0],
}

type AllAction = AllChangeAction;

export const rootReducer: Reducer<RootState, AllAction> = (state = initialState, action) => {
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