import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="#">Logo</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">DashBoard</NavLink>
          </li>
          <li>
            <NavLink to="/ClientCustomizationForm">
              Client Customization Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/SalesTeamDashboard">Sales Team Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/SupportTeamDashboard">Support Team Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/TechnicalTeamDashboard">
              Technical Team Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
