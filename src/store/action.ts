import {ActionCreator} from "redux";

export  const CHANGE_HEADING = 'CHANGE_HEADING';
type ChangeHeadingAction = {
    type: typeof CHANGE_HEADING;
    choiceHeading: string;
}

export const changeHeading: ActionCreator<ChangeHeadingAction> = (choiceHeading) => ({
    type: CHANGE_HEADING,
    choiceHeading,
});

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
type ChangeCurrencyAction = {
    type: typeof CHANGE_CURRENCY;
    choiceCurrency: string;
}

export const changeCurrency: ActionCreator<ChangeCurrencyAction> = (choiceCurrency) => ({
    type: CHANGE_CURRENCY,
    choiceCurrency,
});

export const CHANGE_PERIOD = 'CHANGE_PERIOD';
type ChangePeriodAction = {
    type: typeof CHANGE_PERIOD;
    choicePeriod: string;
}

export const changePeriod: ActionCreator<ChangePeriodAction> = (choicePeriod) => ({
    type: CHANGE_PERIOD,
    choicePeriod,
});

export type AllChangeAction = ChangeHeadingAction
    | ChangeCurrencyAction
    | ChangePeriodAction