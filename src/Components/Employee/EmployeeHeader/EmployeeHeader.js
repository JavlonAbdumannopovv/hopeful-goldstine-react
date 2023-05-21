import React from "react";
import "./EmployeeHeader.css";

function EmployeeHeader(props) {
  const { formShow } = props;

  let searchItem = (e) => {
    props.setSearchItem(e.target.value);
  }

  return (
    <div className="employee_header">
      <div className="employee_title">
        <p >Search Employees</p>
      </div>
      <div className="employee_search">
        <i className='bx bx-search'></i>
        <input type="text" onChange={searchItem} />
      </div>
      <div className="employee_button">
        <button onClick={formShow}>Add New</button>
      </div>
    </div>
  )
}

export default EmployeeHeader;