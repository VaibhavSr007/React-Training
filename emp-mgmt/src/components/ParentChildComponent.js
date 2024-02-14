import React from 'react'

export const ParentComponent = (props) => {
    // props.Username = "Aayush";
  return (
    <div style={{border: "2px solid blue"}}>
        <h1>This is Parent Component , Welcome {props.Designation} {props.Username}</h1>
        <ChildComponent {...props}></ChildComponent> {/* passing props with spread operator makes the object's properties immutable */}
    </div>
  )
}

export const ChildComponent = (props) => {
    
    // props.Name = "Penny"; // now this is immutable 

    return (
        <>
            <h3>This is child component</h3>
            <div>Name is {props.Name} Branch is {props.Branch} CGPA is {props.CGPA}</div>
        </>
    )
}
