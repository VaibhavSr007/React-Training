import { combineReducers } from "redux";

import employeeReducer from "./employeeReducer"
import hotelReducer from "./hotelReducer"
import flightReducer from './flightReducer'

const rootReducer = combineReducers({
    employees: employeeReducer,
    flights: flightReducer,
    hotels: hotelReducer
})

export default rootReducer;