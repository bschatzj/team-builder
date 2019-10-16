import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import EmployeeForm from './members';
import Employee from './employee';
import data from "./data";

function App() {
  const [employee, setEmployee] = useState(data);

  const addNewEmployee = employees => {
    setEmployee([...employee, employees]);
  };
  return (
    <div className="App">
      <h1>My Notes</h1>
      <EmployeeForm addNewEmployee={addNewEmployee} />
      <Employee employeeList={employee} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
