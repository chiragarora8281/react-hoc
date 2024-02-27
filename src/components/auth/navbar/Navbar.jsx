/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Hoc from "../../../hoc/Hoc"

const Navbar = ({profile}) => {
  return (
    <div>
        <h1>Navbar</h1>
        <h2>{profile.company} is coming from HOC</h2>
    </div>
  )
}

export default Hoc(Navbar)