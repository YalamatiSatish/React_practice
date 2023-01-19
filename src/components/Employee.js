import React from 'react'
import EditEmployee from './EditEmployee'

const Employee = (EmployeeDetails,updateEmployee) => {

  return (
<div className="min-w-sm max-w-sm bg-green-300 m-2 py-8 px-8   rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="object-cover  block m-2 mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" 
  src={EmployeeDetails.EmployeeDetails.img} 
  alt="employee face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        Name: {EmployeeDetails.EmployeeDetails.name}
      </p>
      <p className="text-lg text-black font-semibold">
        Role: {EmployeeDetails.EmployeeDetails.Role}
      </p>
    </div>
    <EditEmployee Details={EmployeeDetails} updateEmployee={updateEmployee}/>

  </div>
</div>
)
}

export default Employee