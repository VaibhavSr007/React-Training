function saveHotelsList(hotelList) {
    return {
        type: "SAVE_HOTELS",
        payload: hotelList
    }
}

function deleteAllHotels() {
    return {
        type: "DELETE_ALL_HOTELS"
    }
}

function deleteHotels(hotelId) {
    return {
        type: "DELETE_HOTELS",
        payload: hotelId
    }
}