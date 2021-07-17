import axios from "axios";
import React from "react";
import { Dispatch } from "redux";
import { ActionTypes, FETCH_DATA } from "./actionTypes";

export interface dataCountry {
    "updated": string,
    "country": string,
    "countryInfo": {
        "_id": number,
        "iso2": string,
        "iso3": string,
        "lat": number,
        "long": number,
        "flag": string
    },
    "cases": number,
    "todayCases": number,
    "deaths": number,
    "todayDeaths": number,
    "recovered": number,
    "todayRecovered": number,
    "active": number,
    "critical": number,
    "casesPerOneMillion": number,
    "deathsPerOneMillion": number,
    "tests": number,
    "testsPerOneMillion": number,
    "population": number,
    "continent": string,
    "oneCasePerPeople": number,
    "oneDeathPerPeople": number,
    "oneTestPerPeople": number,
    "undefined": number,
    "activePerOneMillion": number,
    "recoveredPerOneMillion": number,
    "criticalPerOneMillion": number
}

export const dataList = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<dataCountry[]>(`https://disease.sh/v3/covid-19/countries/Brasil?yesterday=Brasil&twoDaysAgo=Brasil&strict=Brasil&allowNull=Brasil`);
        const pais = response.data
        console.log(pais)
        dispatch<ActionTypes>({
            type: FETCH_DATA,
            payload: response.data,
         });
    };
}