import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

interface MenuItem {
  path: string;
  text: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => (
  <div className="menu-wrapper">
    <ul className="menu-container">
      {items.map((item, index) => (
        <li className="menu-element" key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
