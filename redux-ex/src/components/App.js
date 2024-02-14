import axios from "axios";
import React, { useEffect, useState } from "react";
import * as actions from "../actions/employeeActions"
import { connect } from "react-redux";

function App(props) {

  // useEffect(() =>{
  //     const getData = async () =>{
  //       var res = await axios.get("http://localhost:3000/employees");
  //       props.saveEmployeesList(res.data)
  //     }
  //     getData();
  // },[])

  const handleDelete = async (id) =>{
    await axios.delete("http://localhost:3000/employees/" + id)
    props.deleteEmployees(id);
  }  
  
  // console.log(employees);
  return (
    <div>


      <h1>All Flights</h1>
      {props.flights?.map((flight) =>{
        return (
          <div>
            <p>Flight Name: {flight.flightName}</p>
            <p>Flight Id: {flight.flightId}</p>
            <hr/>
          </div>
        )
      })}


      <br/>
      <br/>
      <br/>


      <h1>All Employees</h1>
      {props.employees?.map((employee) =>{
        return (
          <div>
            <p>Employee Name: {employee.name}</p>
            <p>Employee Id: {employee.id}</p>
            <p>Employee Joining: {employee.careatedAt}</p>
            <input type="button"  value="Delete" onClick={() => handleDelete(employee.id)} />
            <hr/>
          </div>
        )
      })}
    </div>
  );
}


// this makes the store data to be populated in the props of this component
function mapStoreToProps(store){
  return {
    employees: store.employees,
    flights: store.flights
  }
}

// this helps to connect the store data and actions in the app component to be used
export default connect(mapStoreToProps, actions)(App)
