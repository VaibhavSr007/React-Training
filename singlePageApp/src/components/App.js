import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Prompt, Route, Switch} from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <nav>
          {/* <Link style={{paddingRight: "10px"}} to="/">Home</Link>
          <Link style={{paddingRight: "10px"}} to="/props">Home with Props</Link>
          <Link style={{paddingRight: "10px"}} to="/help/7/vaibhav">Help</Link>
          <Link style={{paddingRight: "10px"}} to="/about">About</Link> */}
          <Link style={{paddingRight: "10px"}} to="/">Home</Link> 
          <Link style={{paddingRight: "10px"}} to="/about">About</Link> 
          
        </nav>

        {/* <div style={{height: "500px", border: "1px solid grey", padding: "20px"}}>
          <Switch>
            <Route exact path ="/" component={HomeComponent}></Route>
            <Route exact path="/props" render={() => <HomeWithPropsComponent userName="Vaibhav" /> }></Route>
            <Route exact path ="/help/:userId/:userName" component={HelpComponent}></Route>
            <Route exact path ="/about" component={AboutComponent}></Route>
            <Route exact component={PageNotFoundComponent}></Route>
          </Switch>
        </div> */}

        <div>         
          <div style={{ border: "1px solid grey", padding: "20px" }}>
              <Switch>
                  <Route exact path="/" component={EmpHomeComponent}></Route>
                  <Route exact path="/employee/:id" component={EmployeeComponent}></Route>
                  <Route exact path ="/about" component={AboutComponent}></Route>
                  <Route exact component={PageNotFoundComponent}></Route>
              </Switch>
          </div>                   
        </div>


      </>

    </BrowserRouter>
  );
}


// ALL EMPLOYEES DATA
function EmpHomeComponent(props){

  const [emps, setEmps] = useState([]);

  useEffect(() =>{

    const getData = async () =>{
      var res = await axios.get("http://localhost:3000/employees")
      setEmps(res.data);
    }
    getData();
  },[])

  // console.log(emps);

  const handleClick = (id) =>{
    props.history.push("/employee/"+id)
  }

  return (
      <>
        
        <h1>All Employees</h1>
        {emps.map((employee) =>{
          return (
          <div>
            <p>Name: {employee.name}</p>
            <p>Id: {employee.id}</p>
            <p>Created At: {employee.createdAt}</p>
            <input type="button" value="Details" onClick={() => handleClick(employee.id)}/>
            <hr/>
          </div>
          )
        })}
      </>
  )
}

// SINGLE EMPLOYEE DATA
function EmployeeComponent(props){
  
  const [empdata, setEmpdata] = useState({});

  useEffect(() =>{

    var empid = props.match.params.id;
    const getData = async () =>{
      var res = await axios.get("http://localhost:3000/employees/"+ empid);
      // console.log(res);
      setEmpdata(res.data);
    }
    getData();

  },[])

  const deleteEmp = async () =>{
    var empid = props.match.params.id;
    await axios.delete("http://localhost:3000/employees/"+ empid);
    props.history.push("/");
  }

  // console.log(empdata);
  return (
      <>
        <h2>Employee {props.match.params.id} Details</h2>
        <div>
            <p>Name: {empdata.name}</p>
            <p>Id: {empdata.id}</p>
            <p>Created At: {empdata.createdAt}</p>
            <input type="button" value="Delete Employee" onClick={deleteEmp}/>
            <hr/>
        </div>
        
      </>
  )
}


// Other components
// function HomeComponent(props){

//   function redirectToHelp() {
//     debugger;
//     console.log(props);
//     props.history.push("/about?userId=10&userName=vaibhav");
    
//   }

//   return (
//       <>
//           <h1>This is Home Page</h1>
//           <input type="button" value="Redirect to About" onClick={redirectToHelp} />
//       </>
//   )
// }


// function HelpComponent(props){
//   // debugger;
//   return(
//     <>
      
//       <Prompt when={props.match.params.userId === 100} message="Are you Sure, You want to redirect ?" />
//       <h1>Help Page</h1>
//       <div>
//         Name: {props.match.params.userName} <br/>
//         Id: {props.match.params.userId}
//       </div>
//     </>
//   )
// }

// function HomeWithPropsComponent(props) {
//   return (
//       <>
//           {props.userName && <h1>User Name is {props.userName}</h1>}
//           <h1>This is Home Page</h1>
//       </>
//   )
// }

function AboutComponent(props){
  let params = queryString.parse(props.location.search);
  return(
    <>
      <h1>About Page!! {params.userName} {params.userId}</h1>
    </>
  )
}

function PageNotFoundComponent(){
  return(
    <>
      <h1>Url does not exist</h1>
    </>
  )
}
