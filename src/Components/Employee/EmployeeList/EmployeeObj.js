import React from "react";

class EmployeeObj extends React.Component{
  constructor(id,name,email,phone,department){
    super(id,name,email,phone,department);
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.department = department;
  }
}

export default EmployeeObj;