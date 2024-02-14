import React, { useState } from 'react'
import employeeData from './EmpData'
import eData from './eData.json'

export const EmpDetails = () => {

    const [ed, setEd] = useState(eData);

    const handleDelete = (index) =>{
        // const updatedEmployees = [...ed];
        // updatedEmployees.splice(i,1);
        const updatedEmployees = ed.filter((_,i) => i !== index);
        setEd(updatedEmployees);
    }

  return (
    <div>
        <h1>Employee Details</h1>
        {ed.map((employee,i) => 
            <div key={i}>
                <p>Id: {employee.id}</p>
                <p>Name: {employee.name}</p>
                <p>Created At: {employee.createdAt}</p>
                <p>Avatar: <img src={employee.avatar} alt="" /></p>
                <input type="button" value="Delete" onClick={() => handleDelete(i)} />  {/* so for every function which have some input parameter we need to pass it wrapped in arrow function */}
                {/* if we directly pass handleDelete, it will immediatly be invoked but if we wrap it in arrow function it will be invoked when click event happens */}
                <hr/>
            </div>
        )}
    </div>
  )
}
