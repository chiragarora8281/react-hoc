/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import withFormHandling from "../../hoc/withFormHandling";
const Login = ({ handleChange, handleSubmit, errors, values }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default withFormHandling(Login);
