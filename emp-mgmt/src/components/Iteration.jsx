import React from 'react'

export const Iteration = () => {

    var employees = ["Mayank", "Vaibhav", "Aayush", "Shriya"];

    function ShowEmp(){
        var stdarr = []; 
        for(let i=0; i<employees.length; i++){
            stdarr.push(<h3>Student {i+1} name is {employees[i]}</h3>)
        }
        return stdarr;
    }

    var EmpData = [
        {
            name: "vai",
            rank: "lt",
            salary: 1000
        }, 
        {
            name: "aay",
            rank: "cap",
            salary: 2000
        },
        {
            name: "sai",
            rank: "maj",
            salary: 3000
        },
        {
            name: "san",
            rank: "lt col",
            salary: 4000
        },
        {
            name: "dhe",
            rank: "col",
            salary: 5000
        }
    ]

  return (
    <>
        <h1>Total Number of Studens are: {employees.length}</h1>
        {/* <ShowEmp/>   or below*/}
        {ShowEmp()}

        <hr/>
        
        {employees.map((data, i) => (
            <h3>Student {i+1} Name is {data}</h3>
            ))}

        <hr/>


        { EmpData.map((data, i) => 
            <div style={{border: "5px solid", margin:"10px", padding:"10px"}}>
                <h3>Name is: {data.name}</h3>
                <div>Rank: {data.rank}</div>
                <div>Salary: {data.salary}</div>
            </div>
        )}
    </>
  )
}
