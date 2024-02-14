import React, { useEffect, useState } from 'react'
import employeeData from './EmpData'
import eData from './eData.json'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FilterEmployees } from './FilterEmployees';

export const EmpDetailsCopy = () => {

    const [ed, setEd] = useState([]);
    const [filterList, setFilterList] = useState([]);

    // GET
    useEffect(()=> {
        const getData = async () =>{
            var res = await axios.get("http://localhost:3000/employees")
            setEd(res.data);
            setFilterList(res.data);
        }
        getData();

    },[])

    // console.log(ed);

    // DELETE
    const handleDelete = async (eid) =>{
        await axios.delete("http://localhost:3000/employees/" + eid);
        var res = await axios.get("http://localhost:3000/employees")
        setEd(res.data);
        setFilterList(res.data);
    }

    
    const navigate = useNavigate();
    const MoveToAddEmp = () =>{
        navigate('/addEmployee')
    }

    function handleFilter(fliterText) {
        var filteredList = [];
        if(fliterText === ""){
            filteredList = ed;
        }
        else{
            filteredList = ed.filter((employee) => {
                return  employee.name.indexOf(fliterText) > -1;
            })
        }

        setFilterList(filteredList);
    }

  return (
    <div>
        
        <input type="button" value="Add New Employees" style={{fontSize: "20px"}} onClick={MoveToAddEmp} />
        <hr/>

        <FilterEmployees  handleFilter={handleFilter} />

        <hr/>
    
        <h1>Employee Details of {filterList.length} employees</h1>
        {filterList.map((employee,i) => 
            <div key={i}>
                <p>Id: {employee.id}</p>
                <p>Name: {employee.name}</p>
                <p>Created At: {employee.createdAt}</p>
                <p>Avatar: <img src={employee.avatar} alt="" /></p>
                <input type="button" value="Delete" onClick={() => handleDelete(employee.id)} />  {/* so for every function which have some input parameter we need to pass it wrapped in arrow function */}
                {/* if we directly pass handleDelete, it will immediatly be invoked but if we wrap it in arrow function it will be invoked when click event happens */}
                <hr/>
            </div>
        )}
    </div>
  )
}
