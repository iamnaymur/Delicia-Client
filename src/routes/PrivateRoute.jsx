import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div class="flex justify-center items-center m-20">
        <div class="relative inline-block w-16 h-16">
          <div class="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-b-4 border-gray-900 opacity-50 animate-pulse"></div>
          <div class="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-b-4 border-yellow-500 animate-spin"></div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to={"/login"}></Navigate>;
};

export default PrivateRoute;
