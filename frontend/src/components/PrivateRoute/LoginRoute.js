import { Route, Redirect } from "react-router-dom";
const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("userDetails") ? (
        <Redirect to={{ pathname: "/home" }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export { LoginRoute };
