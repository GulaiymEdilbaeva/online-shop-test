import React from "react";
import { Header } from "../layout/Header";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "../layout/Footer";
export const MainLayout = () => {
  return (
    <>
      <Contenet>
        <Header />
        <Outlet />
      </Contenet>
      <Footer />
    </>
  );
};
const Contenet = styled("div")`
  margin-top: 20px;
  margin-right: 120px;
  margin-left: 120px;
`;
