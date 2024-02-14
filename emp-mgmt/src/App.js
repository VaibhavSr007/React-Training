import { ConditionAndIteration } from "./components/ConditionAndIteration";
import {FirstCompoent, SecondCompo} from "./components/FirstCompoent";
import { Iteration } from "./components/Iteration";
import {ChildComponent, ParentComponent} from "./components/ParentChildComponent";
import { UpdateProps } from "./components/UpdateProps";
import { WorkingWithStyles } from "./components/WorkingWithStyles";
import { Hook } from "./components/Hook";
import { Fetching } from "./Hooks/Fetching";
import UpdateClock from "./classes/UpdateClock";
import UpdateCounter from "./classes/UpdateCounter";
import ArrowFunction from "./classes/ArrowFunction";
import { MultipleStateVariable } from "./Hooks/MultipleStateVariable";
import { StocksFetching } from "./Hooks/StocksFetching";
import { DbSaving } from "./Hooks/DbSaving";
import { ContextUsage } from "./Hooks/ContextUsage";
import { ContextUsageCopy } from "./Hooks/ContextUsage copy";
import { EmpDetails } from "./appHooks/EmpDetails";
import { OtherHooks } from "./appHooks/OtherHooks";
import { CustomHook } from "./appHooks/CustomHook";
import { EmpDetailsCopy } from "./appHooks/EmpDetailsCopy";
import { AddEmployees } from "./appHooks/AddEmployees";
import { HrComponent, DirectorComponent, ManagerComponent } from "./appHooks/HigherOrderComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsingMemoFunction } from "./appHooks/UseMemo";



function App() {

  var data = {
    Username: "Vaibhav",
    Designation: "Intern",
    Salary: 20
  }

  var StuData = {
    Name: "Vaibhav",
    Branch: "CSE",
    CGPA: 9
  }

 // var stdata = {...StuData} // this is spread operator to spread properties (properties passes with spread operator can not be edited)

  return (
    <div className="App">

      {/* <FirstCompoent UserName = "Vaibhav"/> <hr/>
      <FirstCompoent UserName = "Aayush"/> <hr/>
      <SecondCompo/> <hr/> */}
      {/* So if we wanna update the props in client component we should pass props as objects/arrays */}
      {/* <UpdateProps data = {data} /> <hr/>

      <WorkingWithStyles/> */}

      {/* <ParentComponent {...StuData} {...data}/> <hr/> */}

      {/* <ConditionAndIteration {...StuData}></ConditionAndIteration> */}

      {/* <Iteration/> */}

      {/* <UpdateClock Username={"vaibhav"}/> */}

      {/* <UpdateCounter/> */}

      {/* <ArrowFunction/> */}

      {/* <Hook/>  */}

      {/* <MultipleStateVariable/> */}

      {/* <Fetching/> */}

      <StocksFetching/>

      {/* <DbSaving/> */}

      {/* <ContextUsage/> */}

      {/* <ContextUsageCopy/> */}

      {/* <EmpDetails/> */}

      {/* <OtherHooks/> */}

      {/* <CustomHook/> */}

      {/* <EmpDetailsCopy/> */}
      
      {/* <AddEmployees/> */}

      {/* <h3>Hr View</h3>
      <HrComponent/>
      <h3>Director View</h3>
      <DirectorComponent/>
      <h3>Manager View</h3>
      <ManagerComponent/> */}

      {/* <UsingMemoFunction/> */}

      {/* <Router> 
        <Routes>
          <Route path="/addEmployee" element={<AddEmployees/>} />
          <Route path="/" element={<EmpDetailsCopy/>} />
        </Routes>
      </Router> */}

      

    </div>
  );
}

export default App;
