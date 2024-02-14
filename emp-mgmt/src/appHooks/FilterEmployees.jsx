import React, { useState } from 'react'

export const FilterEmployees = (props) => {
  return (
    <div>
        <h1>Filter Employees</h1>
        <input type="text"  onChange={(e) => {props.handleFilter(e.target.value)}} />
    </div>
  )
}
