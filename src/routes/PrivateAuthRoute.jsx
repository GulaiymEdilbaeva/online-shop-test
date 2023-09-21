import { Navigate } from "react-router-dom";

export const PrivateAuthRoute = ({
  isAuthorized,
  fallbackPath,
  RouteComponents,
}) => {
  if (isAuthorized) {
    return RouteComponents;
  }
  return <Navigate to={fallbackPath} replace />;
};
