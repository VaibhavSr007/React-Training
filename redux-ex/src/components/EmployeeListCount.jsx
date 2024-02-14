import React from 'react'
import { connect } from 'react-redux'

export const EmployeeListCount = (props) => {
  return (
    <h1>Employees List have count: {props.emps.length}</h1>
  )
}

function mapStoreToProps(store){
    return {
        emps: store.employees
    }
}

export default connect(mapStoreToProps, null)(EmployeeListCount)