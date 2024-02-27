/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Component, React } from "react";
/* eslint-disable react/display-name */
const withFormHandling = (WrappedComponent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        values: {},
        errors: {},
      };
    }
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      //   const errors = this.validateErrors();
      //   this.setState({ errors });
      //   if (Object.keys(errors).length===0) {
      //     this.props.onSubmit(this.state.values)
      // }
      console.log(this.state);
    };

    // validateErrors() {
    //   return {};
    // }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          values={this.state.values}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default withFormHandling;
