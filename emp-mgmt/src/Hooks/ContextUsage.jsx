import React, { useState } from 'react'

export const ContextUsage = () => {
    var [Details, setDetails] = useState({
        city: "Raebareli",
        surName: "Srivastava"
    })

  return (
    <>
        <div>ContextUsage</div>
        <hr/>
        <GranParent details = {Details} setDetails={setDetails}/>
    </>
  )
}


export const GranParent = (props) => {
    return (
        <>
           <div>Grand Parent</div>
           <hr/>
           <Parent details = {props.details} setDetails={props.setDetails}/>
        </>
    )
}

export const Parent = (props) => {
    return (
        <>
            <div>Parent</div>
            <h1>Surname: {props.details.surName} City: {props.details.city}</h1>
            <hr/>
            <Children details = {props.details} setDetails={props.setDetails}/>
        </>
    )
}

export const Children = (props) => {
    return (
        <>
            <div>Children</div>
            <hr/>
            <GrandChildren details = {props.details} setDetails={props.setDetails}/>
        </>
    )
}

export const GrandChildren = (props) => {

    function UpdateData(){
        props.setDetails({
            ...props.Details,
            surName: "Singh",
            city: "Lucknow"
        })
    }
    return (
        <>
            <div>Grand Children</div>
            <h1>Surname: {props.details.surName} City: {props.details.city}</h1>
            <input type="button" value="Change" onClick={UpdateData} />
        </>
    )
}
