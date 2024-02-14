import React, { useState } from 'react'

export const DbSaving = () => {

    const [userObj, setUserObj] = useState({name: "", age: 0, designation: "", salary: 0});
    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    // const [designation, setDesignation] = useState("");
    // const [salary, setSalary] = useState(0);

    const AddToDB = () =>{
        alert("Name is: " + userObj.name)
        alert("Designation is: " + userObj.designation)
        alert("Age is: " + userObj.age)
        alert("Salary is: " + userObj.salary)
    }

    const UpdateData = (event) =>{
        setUserObj({
            ...userObj,
            // name: event.target.value,
            // age: event.target.value,
            // designation: event.target.value,
            // salary: event.target.value

            // we can save all values at once using this way (name/id attribute is defined in the tag)
            // [event.target.id]: event.target.value
            [event.target.name]: event.target.value

        })
    }

  return (
    <div>
        <input type="text" name="name" value={userObj.name} id="name" onChange={UpdateData}/>  <br/>
        <input type="text" name="age" value={userObj.age} id="age" onChange={UpdateData} /> <br/>
        <input type="text" name="designation" value={userObj.designation} id="designation" onChange={UpdateData} /> <br/>
        <input type="text" name="salary" value={userObj.salary} id="salary" onChange={UpdateData} /> <br/>
        <input type="button" value="Save to DB" onClick={AddToDB} />
    </div>
  )
}
