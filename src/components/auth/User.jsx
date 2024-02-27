/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import withFetch from "../../hoc/Hoc";

const User = ({ data, loading }) => {
  if (loading === true || data === null) {
    return "loading.....";
  } else {
    return (
      data.length > 0 &&
      data.map((user) => {
        return (
          <li key={user.id}>
            <picture>
              <img
                src={user.avatar_url}
                alt={user.login}
                height={200}
                width={200}
              />
            </picture>
            <h2> {user.login}</h2>
          </li>
        );
      })
    );
  }
};

export default withFetch(User);
