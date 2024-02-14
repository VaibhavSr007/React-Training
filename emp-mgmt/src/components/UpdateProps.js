import React from 'react'

export const UpdateProps = (props) => {

    // and in this way we can update the props, if we try passing username directly as props and update it will show error
    props.data.Username = "Aayush";

  return (
    <div>
        <h1>Lets Update the Props</h1>
        <p>User Name is {props.data.Username} and Designation is {props.data.Designation} </p>
        
    </div>
  )
}
