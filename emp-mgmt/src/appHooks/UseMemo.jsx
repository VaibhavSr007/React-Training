import { useState, useMemo } from "react";
export const UsingMemoFunction = ()  => {

    let [count, setCount] = useState(3000000000);
    
    let [cachedResult, setCachedResult] = useState({});
    let [counter, setCounter] = useState(0);
    
    let totalValue = calculateSum(count);
    
    function calculateSum(count) { 
        if (cachedResult[count]) {
            return cachedResult[count];
        } else {
            var sum = 0;
            for (let i = 0; i < count; i++) {
                sum += i;
            }
            
            setCachedResult({
                ...cachedResult,
                [count]: sum
            })
            
            return sum;
        }
    }
    
    function incrementCounter() {
        debugger;
        setCounter((oldCounter) => {
            return oldCounter + 1;
        })
    }
    
    function incrementDecrementCount(increseOrDecrease) {
        if (increseOrDecrease == 1) {
            setCount((oldCount) => {
                return oldCount + 1
            })
        } else {
            setCount((oldCount) => {
                return oldCount - 1
            })
        }
    }
    
    return (
        <>
            <h1>Sum value is: {totalValue}</h1>
            <h1>Count value is: {count}</h1>
            <b>Counter Value = {counter}</b><br/><br/>
            <input type="button" onClick={incrementCounter} value="Increment Counter" />
            
            
            <input type="button" onClick={() => incrementDecrementCount(1)} value="Increment Count" />
            <input type="button" onClick={() => incrementDecrementCount(0)} value="DecrementCount Count" />
        </>
    )
}