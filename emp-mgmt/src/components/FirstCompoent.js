import React from 'react'

export const FirstCompoent = (props) => {
    return (
        <h1>Hello {props.UserName}, Your Id is {Math.floor(Math.random() * 11)}</h1>
    )
}

export const SecondCompo = () => {

  return React.createElement("div", {}, [
    React.createElement("div", {},
      React.createElement("h1", {} , "This is the Mian Content")
      ),
      React.createElement("div", {}, [
        React.createElement("p", {}, "Welcome back...")
      ])
  ])
}
