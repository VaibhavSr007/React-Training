function ManagerViewFunction(props) {
    return (
        <>
            <b>Employee Name: {props.employee.empName}</b><br/><br/>
            <b>Employee Experience: {props.employee.empExperiance}</b><br/><br/>
            <b>Employee Company: { props.employee.empCurrentCompany }</b><br/><hr/>
        </>
    )
}

function HrViewFunction(props) {
    return (
        <>
            <b>Employee Name: {props.employee.empName}</b><br/><br/>
            <b>Employee Experience: {props.employee.empExperiance}</b><br /><br />
            <b>Employee Salary: {props.employee.empSalary}</b><br /><br />
            <b>Employee Bonus: {props.employee.empBonus}</b><br/><br/>
            <b>Employee Company: { props.employee.empCurrentCompany }</b><br/><hr/>
        </>
    )
}

function DirectorViewFunction(props) {
    return (
        <>
            <b>Employee Name: {props.employee.empName}</b><br/><br/>
            <b>Employee Experience: {props.employee.empExperiance}</b><br /><br />
            <b>Employee Bonus: {props.employee.empBonus}</b><br/><br/>
            <b>Employee Company: { props.employee.empCurrentCompany }</b><br/><hr/>
        </>
    )
}

function HigherOrderComponents(InputComponent) {
    return function OverriddenComponent() {
        var employeeData = [{
            empName: "Mayank",
            empExperiance: "13Yrs",
            empCurrentCompany: "Blackrock",
            empSalary: "10",
            empBonus: "1"
        }, {
            empName: "TechnoFunnel",
            empExperiance: "12Yrs",
            empCurrentCompany: "Blackrock",
            empSalary: "12",
            empBonus: "2"
            }];
        
        function deleteEmployee() { }
        function hireEmployee() { }    
        return (
            <div style={{ padding: "10px", margin: "10px" }}>
                {employeeData.map((employee) => {
                    return <InputComponent employee={employee}></InputComponent>
                })}
            </div>
        )
    }
}

export const HrComponent = HigherOrderComponents(HrViewFunction)
export const DirectorComponent = HigherOrderComponents(DirectorViewFunction)
export const ManagerComponent = HigherOrderComponents(ManagerViewFunction)


