import { List, ListItem, ListIcon } from "@chakra-ui/react";
import {
  CalendarIcon,
  EditIcon,
  QuestionOutlineIcon,
  ViewIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <List color="white" fontSize="1.2em" spacing={4}>
        <NavLink to="#">Logo</NavLink>
        <nav>
          <ListItem>
            <NavLink to="/">
              <ListIcon as={CalendarIcon} color="teal" />
              DashBoard
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/ClientCustomizationForm">
              <ListIcon as={EditIcon} color="teal" />
              Client Customization Form
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/SalesTeamDashboard">
              <ListIcon as={QuestionOutlineIcon} color="teal" />
              Sales Team Dashboard
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/SupportTeamDashboard">
              <ListIcon as={ViewIcon} color="teal" />
              Support Team Dashboard
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/TechnicalTeamDashboard">
              <ListIcon as={SettingsIcon} color="teal" />
              Technical Team Dashboard
            </NavLink>
          </ListItem>
        </nav>
      </List>
    </header>
  );
};

export default Header;
