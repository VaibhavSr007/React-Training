export default function flightReducer(flightStore = [{flightId: 7, flightName: "Air India"}], action){
    if(action.type == "DELETE_ALL_FLIGHTS"){
        return [];
    }

    if(action.type == "SAVE_FLIGHTS"){
        return action.payload;
    }

    if(action.type == "DELETE_FLIGHTS"){
        var newFlightList = flightStore.filter((flight) =>{
            return flight.id != action.payload
        })

        return newFlightList;
    }
    return flightStore;
}