import React from "react";

const Employee = props => {
  return (
    <div className="employee-list">
      {props.employeeList.map((employee, index) => {
        return (
          <div className="employee" key={index}>
            <h2>{employee.name}</h2>
            <p>{employee.email}</p>
            <p>{employee.position}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Employee;
