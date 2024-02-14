export default function hotelReducer(hotelStore = [], action){
    if(action.type == "DELETE_ALL_HOTELS"){
        return [];
    }

    if(action.type == "SAVE_HOTELS"){
        return action.payload;
    }

    if(action.type == "DELETE_HOTELS"){
        var newHotelList = hotelStore.filter((hotel) =>{
            return hotel.id != action.payload
        })

        return newHotelList;
    }

    return hotelStore;
}