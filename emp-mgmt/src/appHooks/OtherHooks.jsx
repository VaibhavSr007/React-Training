import React, { useEffect, useRef, useState } from 'react'

export const OtherHooks = () => {

    const [uname, setUname] = useState("");
    const elementRef = useRef();
    var userData = useRef({
        username: "Vaibhav",
        userId: 7
    });

    useEffect (() => {
        elementRef.current.focus();
    },[])

    function UpdateData(){
        setUname(elementRef.current.value);
        elementRef.current.style.color = "red";
    }

    function UpdateRefData(){
        userData.current = {
            username: "Aayush",
            userId: 10
        };
    }

  return (
    <>
        <h1>User Name is {uname}  {userData.current.username} ID: {userData.current.userId}</h1>
        {/* <input type="text" onChange={(event) =>{setUname(event.target.value)}}/> */}
        <input type="text" ref={elementRef} onChange={UpdateData}/>
        <input type="button" value="Change" onClick={UpdateRefData}/>
    </>
  )
}
