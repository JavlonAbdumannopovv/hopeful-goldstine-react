import React from "react";
import useForm from "../customHook/useForm";

const initialState = {
  firstName: "",
  password: "",
  text: "",
}

export default function Contact() {
  const [value, changedHandler] = useForm(initialState);
    
  console.log(value);
  return (
    <form>
      <div className="form-group">
        <label className="form-label">First Name</label>
        <input
          value={value.name}
          type="text"
          className="form-control"
          placeholder="Enter email"
          name="firstName"
          onChange={changedHandler}
        />

        <label className="form-label">Email</label>
        <input
          value={value.email}
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={changedHandler}
        />

        <label className="form-label">Text</label>
        <textarea
          value={value.text}
          onChange={changedHandler}
          name="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>

    </form>
  )
}