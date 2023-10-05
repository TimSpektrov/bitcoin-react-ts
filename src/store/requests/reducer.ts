import {Reducer} from "react";
import {
    IItemData, REQUEST_DATA, REQUEST_DATA_ERROR, REQUEST_DATA_SUCCESS,
    RequestDataAction,
    RequestDataErrorAction,
    RequestDataSuccessAction
} from "./action.ts";
import {initialState} from "../index.ts";

export type RequestState = {
    loading: boolean,
    data: IItemData[],
    error: string,
}

export type RequestActions = RequestDataAction
    | RequestDataSuccessAction
    | RequestDataErrorAction

export const requestReducer: Reducer<RequestState, RequestActions> = (state = initialState.request, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                loading: true,
            }
        case REQUEST_DATA_SUCCESS:
            return  {
                ...state,
                loading: false,
                data: action.data
            }
        case REQUEST_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
