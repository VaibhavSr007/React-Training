import React, { useEffect, useState } from 'react'


export const Hook = () => {

    const [curTime, setCurTime] = useState(returnCurrentTime());
    const [count, setCount] = useState(0);

    const [empDetails, setEmpDetails] = useState({username: "Vaibhav", designation: "Intern"})

    function returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    setTimeout( ()=> {
        setCurTime(returnCurrentTime());
        // console.log(curTime);
    }, 1000)

    function Incr() {
        // setCount(count + 100);
        setCount((count) => { // this way to setValues if new value is related/derived from old value
            return count+100;
        })
    }

    

    function ChangeD (){
        // Immutability: Object of useState are immutable so rather thsn updating them make new object than set it as original

        // const newEmpDetail = {...empDetails};
        // newEmpDetail.username = "Mayank";
        // newEmpDetail.designation = "Trainer";
        // setEmpDetails(newEmpDetail);

        setEmpDetails({
            ...empDetails,
            username: "Mayank",
            designation: "Trainer"
        })
    }


    useEffect(() => {
        console.log("This runs on rerendering and initial rendering")
    
        // best way for using setInterval is inside the useEffect like below
        setInterval(() =>{
            // in this way we use setState function inside useEffect
            setCount((countval) => {
                return countval+1
            })
        },1000)
        
    },[])
 
  return (
        <div>
            <h1>Current Time is: {curTime} </h1>
            <hr/>

            <h2>Counter is: {count}</h2>
            <input type="button" value="increment" onClick={Incr} />
            <hr/>

            <h3>Name: {empDetails.username} <br/> Designation: {empDetails.designation}</h3>
            <input type="button" value="Change Details" onClick={ChangeD}/>


       </div>

  )
}
