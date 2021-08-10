import { Route, Redirect } from "react-router-dom";
// const LoginRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem("userDetails") ? (
//         <Redirect to={{ pathname: "/home" }} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const LoginRoute = (props) => {
//   const userFromStorage = localStorage.getItem("userDetails");
//   if (userFromStorage) {
//     return <Redirect to={{ pathname: "/home" }} />;
//   } else {
//     return <Route {...props} />
//   }
// };

// export { LoginRoute };
