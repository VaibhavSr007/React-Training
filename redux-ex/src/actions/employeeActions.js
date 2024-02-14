import axios from "axios";

export function saveEmployeesList(employeeList) {
    return {
        type: "SAVE_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteAllEmployees() {
    return {
        type: "DELETE_ALL_EMPLOYEES"
    }
}

export function deleteEmployees(employeeId) {
    return {
        type: "DELETE_EMPLOYEES",
        payload: employeeId
    }
}

export function loadEmployeeData() {
    return async function(dispatch) {
        var response = await axios.get("http://localhost:3000/employees")
        dispatch(saveEmployeesList(response.data))
    }
}