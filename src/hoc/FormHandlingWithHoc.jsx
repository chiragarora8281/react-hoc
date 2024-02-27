import { useState } from "react";
import withFormHandling from './../components/auth/Login';

const withFormHandling = (WrappedComp) => {
  let [state, setState] = useState({
    values: {},
  });
  let handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevVal) => ({
      ...prevVal,
      values: { ...prevVal.values, [name]: value },
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", this.state);
  };
  return (
    <WrappedComp
      values={state.values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withFormHandling;
