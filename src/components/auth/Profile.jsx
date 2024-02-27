/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import withFetch from "./../../hoc/Hoc";

const Profile = ({ data, loading, error }) => {
  if (loading === true || data === null) {
    return "loading.....";
  } else {
   return data.length > 0 &&
      data.map((user) => {
        return (
          <li key={user.id}>
            <picture>
                <img src={user.avatar_url} alt={user.login} height={200} width={200}/>
            </picture>
            <h2> {user.login}</h2>
          </li>
        );
      });
  }
};

export default withFetch(Profile);
