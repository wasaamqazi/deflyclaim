import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export function AdminHoc(Component) {
  return function AuthenticatedComponent(props) {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    if (user && user.role == "user") {
      <Component {...props} />;
    }
    return (
      <>
        {user && user.role == "user" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )}
      </>
    );
  };
}

export default AdminHoc;
