import React, { useEffect, useState } from 'react'

export const MultipleStateVariable = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('Vaibhav');

    useEffect(() =>{ // renders when counter updates
        console.log("Counter Updated" + counter);
    },[counter])

    useEffect(() =>{ // renders when name updates
        console.log("name Updated" + name);
    },[name])

    useEffect(() =>{ // renders when name or counter anyone updates
        console.log("Counter or Name Updated");
    },[counter, name])

  return (
    <div>
        <h1>Name is: {name}</h1>
        <h1>Counter is: {counter}</h1>
        <input type="button" value="change Counter" onClick={()=> {setCounter(counter+1)}}/>
        <input type="button" value="change Name" onClick={()=> {setName("Mayank")}}/>
    </div>
  )
}
