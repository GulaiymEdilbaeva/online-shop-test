import { useEffect, useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/slices/authSlice";
import { CircularProgress } from "@mui/material";

function App() {
  const { isAuthorized, data } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      localStorage.getItem("clientData")?.token &&
      localStorage.getItem("clientData")?.role
    ) {
      const storagedData = JSON.parse(localStorage.getItem("clientData"));
      dispatch(authActions.autoLogin(storagedData));
    }
    setLoading(false);

    if (loading) {
      return <CircularProgress />;
    }
  }, []);
  return (
    <>
      <AppRoutes isAuthorized={isAuthorized} role={data.role} />
    </>
  );
}

export default App;
