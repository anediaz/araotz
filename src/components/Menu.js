import React from "react";
import { NavLink } from "react-router-dom";
import './menu.css';

const BLOCK = 'gatza-horizontal-menu';

const Menu = ({ items }) => (
  <div className={BLOCK}>
    <ul className={`${BLOCK}__list`}>
      {items.map((item, index) => (
        <li key={index} className={`${BLOCK}__list-item`}>
          <NavLink to={item.path} activeClassName='active' exact>
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
