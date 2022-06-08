import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export function AdminHoc(Component) {
  return function AuthenticatedComponent(props) {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    if (user && user.role == "admin") {
      <Component {...props} />;
    }
    return (
      <>
        {user && user.role == "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )}
      </>
    );
  };
}

export default AdminHoc;
