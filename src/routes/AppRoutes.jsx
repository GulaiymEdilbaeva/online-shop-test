import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { SignUpForm } from "../components/AuthForm/SignUpForm";
import { SignInForm } from "../components/AuthForm/SignInForm";
import { PrivateAuthRoute } from "./PrivateAuthRoute";
import { AdminPage } from "../pages/AdminPage";

export const AppRoutes = ({ isAuthorized }) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={"sign-up"} />} />
        <Route
          path="sign-up"
          element={
            <PrivateAuthRoute
              RouteComponents={<SignUpForm />}
              fallbackPath="/admin"
              isAuthorized={!isAuthorized}
            />
          }
        />
        <Route
          path="sign-in"
          element={
            <PrivateAuthRoute
              RouteComponents={<SignInForm />}
              fallbackPath="/admin"
              isAuthorized={!isAuthorized}
            />
          }
        />
      </Route>
      <Route
        path="/admin"
        element={
          <PrivateAuthRoute
            RouteComponents={<AdminPage />}
            fallbackPath="/sign-in"
            isAuthorized={!isAuthorized}
          />
        }
      ></Route>
    </Routes>
  );
};
