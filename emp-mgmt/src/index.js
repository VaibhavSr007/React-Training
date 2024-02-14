import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);




// this is the conversion of Below written html content in without jsx format
// function SecondCompo (){

//   return React.createElement("div", {}, [
//     React.createElement("div", {},
//       React.createElement("h1", {} , "This is the Mian Content")
//       ),
//       React.createElement("div", {}, [
//         React.createElement("p", {}, "Welcome back...")
//       ])
//   ])
// }


// this is the pure html format which is converted to react without jsx format above
{/* <div>
        <div>
          <h1>This is Main Content</h1>  
        <div/>

        <div>
          <p>
            Welcome Back...
          </p>
        </div>
      </div> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
