import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Dashbboard() {
  return (
    <>
      <Header />
      <h1>DashBoard</h1>
      <Outlet />
    </>
  );
}

export default Dashbboard;
