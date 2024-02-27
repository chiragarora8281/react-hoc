import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Profile from "./components/auth/Profile";
import User from "./components/auth/User";

const App = () => {
  return (
    <div className="flex">
      <div className="profile">
        <Register />
        {/* <Login/> */}
        {/* <Profile /> */}
      </div>

      <div className="user">
        <User />
      </div>
    </div>
  );
};

export default App;

//! DEMONTRATION OF HOC
// import Profile from "./components/auth/Profile";
// import Navbar from "./components/auth/navbar/Navbar";

// const App = () => {
//   return (
//     <div>
//       <Profile />
//       <Navbar />
//     </div>
//   );
// };

// export default App;
