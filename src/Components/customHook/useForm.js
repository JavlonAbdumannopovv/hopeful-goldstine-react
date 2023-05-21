import React from "react";

const useForm = (initialState) => {

  const [value, setValue] = React.useState(initialState);

  return [
    value,
    (e) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value
      })
    }
  ]
}

export default useForm;

