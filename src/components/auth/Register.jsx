/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import withFormHandling from "../../hoc/withFormHandling";
const Register = ({ values, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter email"
        />
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter Password"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default withFormHandling(Register);
