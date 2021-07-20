import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, FETCH_DATA, FETCH_DATA_LIST } from "./actionTypes";

interface Data {
    "country": string,
    "province": [
        string
    ],
    "timeline": {
        "cases": {},
        "deaths": {},
        "recovered": {}
    }
  }

export const dataList = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get(`https://disease.sh/v3/covid-19/countries/Brasil?yesterday=Brasil&twoDaysAgo=Brasil&strict=Brasil&allowNull=Brasil`);
        dispatch<ActionTypes>({
            type: FETCH_DATA,
            payload: response.data,
         });
    };
}

export const dataListCases = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Data>(`https://disease.sh/v3/covid-19/historical/Brasil?lastdays=4`);
        // Object
        //     .entries(response.data.timeline.cases)
        //     .forEach( ([key, value]) => {
        //         console.log(key, value)
        // })
        dispatch<ActionTypes>({
            type: FETCH_DATA_LIST,
            payload: response.data,
         });
    };
}

