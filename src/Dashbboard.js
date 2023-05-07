import React from "react";
import { NavLink } from "react-router-dom";

function Dashbboard() {
  return (
    <>
      <header>
        <NavLink to="#">Logo</NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Dashbboard</NavLink>
            </li>
            <li>
              <NavLink to="/ClientCustomizationForm">
                Client Customization Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/SalesteamDashboard">Sales Team Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/SupportTeamDashboard">
                Support Team Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/TechnicalTeamDashboard">
                Technical Team Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Dashbboard;
