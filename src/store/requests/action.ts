import {Action, ActionCreator} from "redux";
import axios from "axios";
import {PERIOD, URL_REQUEST} from "../../constants/API.ts";
import {RootState} from "../index.ts";
import {ThunkAction} from "redux-thunk";

export interface IItemData {
    close: number,
    high: number,
    low: number,
    open: number,
    time: number,
    volumefrom: number,
    volumeto: number,
}

export const REQUEST_DATA = 'REQUEST_DATA';
export type RequestDataAction = {
    type: typeof REQUEST_DATA;
}
export const requestData: ActionCreator<RequestDataAction> = () => ({
    type: REQUEST_DATA,
});

export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS';
export type RequestDataSuccessAction = {
    type: typeof REQUEST_DATA_SUCCESS;
    data: IItemData[]
}
export const requestDataSuccess: ActionCreator<RequestDataSuccessAction> = (data) => ({
    type: REQUEST_DATA_SUCCESS,
    data,
});

export const REQUEST_DATA_ERROR = 'REQUEST_DATA_ERROR';
export type RequestDataErrorAction = {
    type: typeof REQUEST_DATA_ERROR;
    error: string;
}
export const requestDataError: ActionCreator<RequestDataErrorAction> = (error) => ({
    type: REQUEST_DATA_ERROR,
    error
});

export const requestDataAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(requestData())
    const period = PERIOD.find(item => item.name === getState().menu.choicePeriod)
    axios
        .get(
          `${URL_REQUEST}${period?.link}?fsym=BTC&tsym=${getState().menu.choiceCurrency}`
        )
        .then((res) => {
            const data = res.data.Data.Data
            if(data.length < 1) {
                setTimeout(() => {
                    dispatch(requestDataAsync());
                }, 1000);
            }

            dispatch(requestDataSuccess(data))
        })
        .catch((error: Error) => {
            dispatch(requestDataError(error))
        })
}
