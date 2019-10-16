import React, { useState } from "react";

const EmployeeForm = props => {
  // console.log("this is our props",props);
  const [employee, setEmployee] = useState({
    name: " ",
    email: " ",
    position: ' ',
  });



  const changeHandler = e => {
    setEmployee({...employee, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewEmployee(employee);
    setEmployee({ name: "", email: "", position: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Name"
        onChange={changeHandler}
        value={employee.name}
      />

      <label htmlFor="email">Email</label>
      <textarea
        name="email"
        id="email"
        placeholder="Email"
        onChange={changeHandler}
        value={employee.email}
      />

      <label htmlFor="position">Position</label>
      <textarea
        name="position"
        id="position"
        placeholder="Position"
        onChange={changeHandler}
        value={employee.position}
      />
      
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
