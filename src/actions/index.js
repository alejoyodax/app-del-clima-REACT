import { apiKey } from './apiKeyWeather'

export const ADD_CITY = "ADD_CITY",
    REMOVE_CITY = "REMOVE_CITY"

export function addCity(city) {
    return {
        type: ADD_CITY,
        payload: city
    }
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        payload: city
    }
}

export function fetchCityInfo(city) {
    return function (dispatch) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        fetch(url)
            .then(r => r.json())
            .then(json => {
                console.log(json)
                dispatch({ type: ADD_CITY, payload: json })
            })
            .catch(e => console.log(e))

    }
}
















