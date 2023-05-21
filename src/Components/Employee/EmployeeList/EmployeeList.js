import React from "react";
import "./EmployeeList.css";

function EmployeeList(props) {
  //NOTE - edit item
  let editItem = (e) => {
    let editor = document.querySelectorAll(".bx-pencil");
    editor.forEach((item, ind) => {
      let editorAtt = item.getAttribute("name");
      let elAtt = e.target.attributes[1].value;
      if (editorAtt === elAtt) {
        props.editItemClick(props.items[ind], ind);
      }
    });
  };

  //NOTE - delete item
  let deleteItem = (e) => {
    let deletor = document.querySelectorAll(".bx-x");
    deletor.forEach((item, index) => {
      let elAtt = e.target.attributes[1].value;
      let itemAtt = item.getAttribute("name");
      if (itemAtt === elAtt) {
        props.deleteItem(index);
      }
    });
  };

  //NOTE - List length
  const [listLength, setListLength] = React.useState(5);

  let listLengthHanler = (e) => {
    let rowBtn = document.querySelectorAll(".rowBtn");
    rowBtn.forEach((item) => {
      item.className = "rowBtn";
    });
    e.target.className = "rowBtn active";
    setListLength(e.target.innerText);
  };

  //NOTE - listItems print
  let listItems = props.items.slice(0, listLength).map((item) => {
    return (
      <li
        key={item.name + item.department}
        name={item.name + item.department + "item"}
      >
        <p className="list_name">{item.name}</p>
        <p className="list_email">{item.email}</p>
        <p className="list_phone">{item.phone}</p>
        <p className="list_departament">{item.department}</p>
        <div className="list_actions">
          <i
            className="bx bx-pencil"
            onClick={editItem}
            name={item.name + item.department + "Editor"}
          ></i>
          <i
            className="bx bx-x"
            onClick={deleteItem}
            name={item.name + item.department + "delete"}
          ></i>
        </div>
      </li>
    );
  });
  let searchItems;
  if (props.searchItem !== "") {
    searchItems = props.items.map((item) => {
      if (
        item.name.toLowerCase().includes(props.searchItem.toLowerCase())
      ) {
        return (
          <li
            key={item.name + item.department}
            name={item.name + item.department + "item"}
          >
            <p className="list_name">{item.name}</p>
            <p className="list_email">{item.email}</p>
            <p className="list_phone">{item.phone}</p>
            <p className="list_departament">{item.department}</p>
            <div className="list_actions">
              <i
                className="bx bx-pencil"
                onClick={editItem}
                name={item.name + item.department + "Editor"}
              ></i>
              <i
                className="bx bx-x"
                onClick={deleteItem}
                name={item.name + item.department + "delete"}
              ></i>
            </div>
          </li>
        );
      } else {
        return null;
      }
    });
  }

  //NOTE - RETURN
  return (
    <div className="employee_list">
      <ul className="list">
        <div className="list_header">
          <li key="header">
            <p className="header_name">Employee Name</p>
            <p className="header_email">Email Adress (Personal)</p>
            <p className="header_number">Mobile Number</p>
            <p className="header_department">Department</p>
            <p className="header_actions">Actions</p>
          </li>
        </div>
        <div className="list_main">
          {props.searchItem === "" ? listItems : searchItems}
        </div>
        <div className="list_footer">
          <p>
            Rows per page:
            <span className="rowBtn active" onClick={listLengthHanler}>
              5
            </span>
            <span className="rowBtn" onClick={listLengthHanler}>
              10
            </span>
            <span className="rowBtn" onClick={listLengthHanler}>
              20
            </span>
          </p>
        </div>
      </ul>
    </div>
  );
}

export default EmployeeList;
