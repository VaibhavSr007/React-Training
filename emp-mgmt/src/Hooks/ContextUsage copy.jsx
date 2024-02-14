import React, { createContext, useContext, useState } from 'react'

const UserDetailsContext = createContext();

export const ContextUsageCopy = () => {
    var [Details, setDetails] = useState({
        city: "Raebareli",
        surName: "Srivastava"
    })

  return (
    <UserDetailsContext.Provider value={{details: Details, setDetails: setDetails}}>
        <div>ContextUsage</div>
        <hr/>
        <GrandChildren/>
    </UserDetailsContext.Provider>
  )
}


export const GranParent = () => {
    return (
        <>
           <div>Grand Parent</div>
           <hr/>
        </>
    )
}

export const Parent = () => {
    return (
        <>
            <div>Parent</div>
            {/* <h1>Surname: {props.details.surName} City: {props.details.city}</h1> */}
            <hr/>
        </>
    )
}

export const Children = () => {
    return (
        <>
            <div>Children</div>
            <hr/>
        </>
    )
}

export const GrandChildren = () => {

    const inpDetails = useContext(UserDetailsContext);
    
    function UpdateData(){
        inpDetails.setDetails({
            ...inpDetails.Details,
            surName: "Singh",
            city: "Lucknow"
        })
    }
    return (
        <>
            <div>Grand Children</div>
            <h1>Surname: {inpDetails.details.surName} City: {inpDetails.details.city}</h1>
            <input type="button" value="Change" onClick={UpdateData} />
        </>
    )
}
