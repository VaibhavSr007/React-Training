import React from 'react'

export const ConditionAndIteration = (props) => {
  return (
    <>
        <h1>Username is : {props.Name}</h1>
        {/* {(props.CGPA >= 9 && props.Branch == "CSE") && <div>You are Eligible</div>} */}

        {(props.CGPA >= 9) && 
            <div>
                {(props.Branch === "CSE") && <div>Your are a CSE student</div>}
                {(props.Branch !== "CSE") && <div>Your are NOT a CSE student</div>}
            </div>
            }
        {props.CGPA < 9 && <div>You are not Eligible</div>}
    </>
  )
}
