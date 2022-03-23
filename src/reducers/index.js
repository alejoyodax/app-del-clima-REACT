/* eslint-disable import/no-anonymous-default-export */
import { ADD_CITY, REMOVE_CITY } from '../actions/index.js'

const initialState = {
    citiesFav: [],
    cityInfo: {},
}



export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                citiesFav: [...state.citiesFav, action.payload]
            }
        case REMOVE_CITY:
            return {
                ...state,
                citiesFav: state.citiesFav.filter(city => city.name !== action.payload)
            }


        default:
            return { ...state }
    }
}










