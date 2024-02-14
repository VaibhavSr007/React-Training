function saveFlightsList(flightList) {
    return {
        type: "SAVE_FLIGHTS",
        payload: flightList
    }
}

function deleteAllFlights() {
    return {
        type: "DELETE_ALL_FLIGHTS"
    }
}

function deleteFlights(flightId) {
    return {
        type: "DELETE_FLIGHTS",
        payload: flightId
    }
}