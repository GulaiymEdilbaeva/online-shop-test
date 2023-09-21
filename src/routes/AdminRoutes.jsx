import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout/RouteWrapper/AdminLayout";
import { PrivateAuthRouteByRole } from "./Private/PrivateAuthRouteByRole";
import { MalePage } from "../pages/Admin/MalePage";
import { ChildrenPage } from "../pages/Admin/ChildrenPage";
import { FemalePage } from "../pages/Admin/FemalePage";

// localhost:3000/admin/*

export const AdminRoutes = ({ role }) => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to={"male"} />} />
        <Route
          path="male"
          element={
            <PrivateAuthRouteByRole
              role={role}
              roles={["ADMIN"]}
              fallbackPath={"/sign-in"}
              RouteComponent={<MalePage />}
            />
          }
        />

        <Route
          path="children"
          element={
            <PrivateAuthRouteByRole
              role={role}
              roles={["ADMIN"]}
              fallbackPath={"/sign-in"}
              RouteComponent={<ChildrenPage />}
            />
          }
        />
        <Route
          path="female"
          element={
            <PrivateAuthRouteByRole
              role={role}
              roles={["ADMIN"]}
              fallbackPath={"/sign-in"}
              RouteComponent={<FemalePage />}
            />
          }
        />
        {/* <Route path="female"></Route>
      <Route path="children"></Route> */}
      </Route>
    </Routes>
  );
};
