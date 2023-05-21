import React, { useState } from 'react';
import './App.css';
import EmployeeHeader from "./Components/Employee/EmployeeHeader/EmployeeHeader";
import EmployeeList from "./Components/Employee/EmployeeList/EmployeeList";
import EmployeeForm from "./Components/Employee/EmployeeForm/EmployeeForm";
import EmployeeEditForm from "./Components/Employee/EmployeeEditForm/EmployeeEditForm";

function App() {

  //NOTE - form section show , hide
  let [classname, setClassname] = useState("employee_form");
  let [employee, setEmployee] = useState("employee");
  const formShow = () => {
    setClassname("employee_form show");
    setEmployee("employee back");
  }
  const formHide = () => {
    setClassname("employee_form");
    setEmployee("employee");
  }

  // NOTE - add items
  const [items, setItems] = useState([]);
  const submitHandler = (inputValue) => {
    setItems([...items, inputValue])
  }

  //NOTE - edit item
  const [editorVal, setEditorVal] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    department: "",
  });
  // edit item index
  let [editItemIndex, setItemIndex] = React.useState({ index: 0 });
  let newInd = {};
  let editItem = (itemVal, ind) => {
    setEditorVal({
      name: itemVal.name,
      email: itemVal.email,
      phone: itemVal.phone,
      city: itemVal.city,
      department: itemVal.department,
    });
    editFormShow();
    newInd = { ...editItemIndex };
    newInd.index = ind;
    setItemIndex({ index: ind });
  }


  //888888888888888888888888888888888888888888888888888888888888888888

  //NOTE - edit 
  //NOTE - form section show , hide
  let [editClassname, setEditClassname] = useState("employee_form");

  const editFormShow = () => {
    setEditClassname("employee_form show");
    setEmployee("employee back");
  }
  const editFormHide = () => {
    setEditClassname("employee_form");
    setEmployee("employee");
  }

  const editSubmitHandler = (inputValue) => {
    const newArray = [...items];
    newArray.splice(editItemIndex.index, 1, inputValue);
    setItems(newArray);
    console.log(editItemIndex.index);
  }

  //NOTE - delete items
  let deleteItem = (index) => {
    const newArray = [...items];
    newArray.splice(index, 1);
    setItems(newArray);
  }

  //NOTE - searchItem 
  const [searchItem, setSearchItem] = useState("");
  // let searchItem = (searchVal) => {

  //   const newArray = [];
  //   items.forEach((item) => {
  //     if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {
  //       newArray.push(item)
  //       console.log(newArray);
  //       setItems(newArray);
  //     }else{
  //       setItems([]);
  //     }
  //   })
  //    if (searchVal === "") {
  //     setItems([]);
  //   }
  // }

  return (
    <div className="App">
      <div className={employee}>
        <EmployeeHeader
          setSearchItem={setSearchItem}
          formShow={formShow}
        />
        <EmployeeList
          searchItem={searchItem}
          editItemIndex={editItemIndex}
          formShow={formShow}
          items={items}
          deleteItem={deleteItem}
          editItemClick={editItem}
        />
      </div>
      <EmployeeForm
        classname={classname}
        formHide={formHide}
        onButtonClick={submitHandler}
      />
      <EmployeeEditForm
        editorVal={editorVal}
        classname={editClassname}
        formHide={editFormHide}
        onButtonClick={editSubmitHandler}
      />
    </div>
  );
}

export default App;
