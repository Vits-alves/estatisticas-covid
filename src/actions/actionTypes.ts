
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_LIST = 'FETCH_DATA_LIST'

interface fetchData {
    type: typeof FETCH_DATA,
    payload: {}
}

interface fetchDataList {
    type: typeof FETCH_DATA_LIST,
    payload: {}
}

export type ActionTypes = fetchData | fetchDataList