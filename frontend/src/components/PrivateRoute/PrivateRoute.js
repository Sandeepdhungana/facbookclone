import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      localStorage.getItem("userDetails") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

export { PrivateRoute };
