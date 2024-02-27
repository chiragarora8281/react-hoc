/* eslint-disable react/display-name */

import React from "react";

// it's a function, react comonent starts with uppercase
const withFetch = (WrappedComponent) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { data: null, loading: true, error: null };
    }
    // lifecycle method that gets called when the component is first loaded to the DOM
    async componentDidMount() {
      try {
        let res = await window.fetch("https://api.github.com/users");
        let finalData = await res.json();
        this.setState({ data: finalData, loading: false });
      } catch (error) {
        this.setState({ error: error, loading: false });
      }
    }
    render() {
      return (
        <>
          <WrappedComponent
            data={this.state.data}
            loading={this.state.loading}
            error={this.state.error}
          />
        </>
      );
    }
  };
};
export default withFetch;

//! HOC() are like function that takes component as an argument and return enhanced version of the component
// Advantage: Avoid duplication, reusability, composability, extract shared logic into separate component

// import { useState } from "react";

// const Hoc = (WrappedComponent) => {
// //   let [profile, setProfile] = useState({
// //     name: "Shashi",
// //     age: 25,
// //     company: "Alpha",
// //     salary: 2000000,
// //     gender: "Male",
// //     cithy: "Bangalore",
// //     hobbies: ["Watching movie", "PLaying cricket"],
// //   });
//   return function comp() {
//     // return <WrappedComponent profile={profile} />;
//     return <WrappedComponent profile = {{
//     name: "Shashi",
//     age: 25,
//     company: "Alpha",
//     salary: 2000000,
//     gender: "Male",
//     cithy: "Bangalore",
//     hobbies: ["Watching movie", "PLaying cricket"]
// }}/>;
//   }
// };

// export default Hoc;

//! Demonstration
// const Hoc = (WrappedComponent) => {
//   let comp = function () {
//     return <WrappedComponent username="Shashi" company="qsp"/>;
//   };
//   return comp;
// };

// export default Hoc;

// let MyComp = () =>{
//     return(<h1>Hello World!</h1>)
// }
// Hoc(MyComp); //! calling HOC

// const Hoc = (WrappedComponent) => {
//     return function(){
//         return <WrappedComponent/>
//     }
// }

// export default Hoc;
