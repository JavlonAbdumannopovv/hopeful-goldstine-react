import React, { useRef, useState } from "react";
import "./EmployeeForm.css";

let initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  department: "",
}

function EmployeeForm(props) {
  const { classname, formHide } = props;
  const [value, changedHandler] = useState(initialState);


  //NOTE - input onchange
  let changedHandlerFunc = (e) => {
    changedHandler((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    e.target.parentNode.className = "form-input";
  }




  let ref = useRef(0);

  //NOTE - submit button clicked
  let formInput = document.querySelectorAll(".form-input");

  function submitHandler() {
    ref.current = 0;
    let formArr = [value.name, value.email, value.phone, value.city, value.department];
    formArr.forEach(((input, ind) => {
      if (input === "") {
        formInput[ind].className = "form-input nocomplete";
        ref.current++
        console.log(ref.current);
      }
      if (ref.current === 0 && ind === 4) {
        props.onButtonClick(value);
        changedHandler(initialState);
        props.formHide();
      }
    }))
  }

    //NOTE - reset form
    let resetForm = () => {
      changedHandler(initialState);
      let formInput = document.querySelectorAll(".form-input");
      formInput.forEach((el)=>{
        el.className = "form-input";
      })
    }

  return (
    <div className={classname}>
      <div className="form_header ">
        <h2 className="form_title">Employee Form</h2>
        <i onClick={formHide} className='bx bx-x form_close'></i>
      </div>
      <div className="form_main">
        <form>
          <div className="form_name form-input ">
            <input
              value={value.name}
              key={"name"}
              name="name"
              type="text"
              onChange={changedHandlerFunc} />
            <span>Full Name</span>
            <small>This field is required.</small>
          </div>
          <div className="form_email form-input ">
            <input
              key={"email"} type="email"
              name="email"
              value={value.email}
              onChange={changedHandlerFunc}
            />
            <span>Email</span>
            <small>This field is required.</small>
          </div>
          <div className="form_phone form-input ">
            <input
              key={"phone"} type="text"
              name="phone"
              value={value.phone}
              onChange={changedHandlerFunc}
            />
            <span>Phone Number</span>
            <small>Minimum 10 numbers required.</small>
          </div>
          <div className="form_city form-input ">
            <input
              key={"city"} type="text"
              name="city"
              value={value.city}
              onChange={changedHandlerFunc}
            />
            <span>City</span>
            <small>This field is required.</small>
          </div>
        </form>
        <div className="form_select">
          <div className="form_gender">
            <h3>Gender</h3>
            <div className="gender_radio">
              <span>Male</span>
              <input type="radio" name="gender" />
              <span>Female</span>
              <input type="radio" name="gender" />
              <span>None</span>
              <input type="radio" name="gender" defaultChecked />
            </div>
          </div>
          <div className="form_department form-input">
            <span>Department</span>
            <input
              type="text"
              name="department"
              value={value.department}
              onChange={changedHandlerFunc} />
            <small>This field is required.</small>
          </div>
          <div className="form_checkbox">
            <input type="checkbox" />
            <p>Permanent Employee</p>
          </div>
          <div className="form_button">
            <button onClick={submitHandler} className="form_submit">Submit</button>
            <button className="form_reset" onClick={resetForm}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeForm;