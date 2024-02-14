import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react'

export const AddEmployees = () => {

    const [addeData, setAddEData] = useState({
        ename: "",
        eid: "",
    })


    const changeData = (e) => {
        setAddEData({
            ...addeData,
            [e.target.id]: e.target.value
        })
    }

    const AddEmployee =  async () =>{
        // var date = Date();
        // alert("Name "+  addeData.ename + " id " + addeData.eage);
        await axios.post("http://localhost:3000/employees/", {
            "id": addeData.eid,
            "createdAt": "Today",
            "name": addeData.ename,
            "avatar": ""
        })

        const newData = {
            ename: "",
            eid: ""
        }
        setAddEData(newData);

        // var res = await axios.get("http://localhost:3000/employees")
        // setEd(res.data);

    }
    
    const navigate = useNavigate();
    const MoveToEmps = () =>{
        navigate('/')
    }

  return (
        <div>
            <h1>Add New Employee</h1>
            Enter Name: <input type="text" id='ename' value={addeData.ename} onChange={changeData}/> <br/>
            Enter ID: <input type="text" id='eid' value={addeData.eid} onChange={changeData} /> <br/>
            <input type="button" value="Add Employee" onClick={AddEmployee} /> <br/>

            <input type="button" value="Back to All Employees" onClick={MoveToEmps} />
        </div>
  )
}
