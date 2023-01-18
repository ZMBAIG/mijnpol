import React from "react";
import { provincieSorted } from "../../data/dataTools";
import { Link } from "react-router-dom";

function SelectProvincieMenu(props) {
  const linkItems = provincieSorted.map(function (name) {
    return (
      <li key={name}>
        <Link to={`${name}`} onClick={() => props.handleRoute(name)}>
          {name}
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <div className="dropdown-menu">
        <span id="select-provincie">
          <i class="fa fa-caret-left"></i>Provincie
        </span>
        <div className="dropdown-menu-content">
          <ul>{linkItems}</ul>
        </div>
      </div>
    </nav>
  );
}

export default SelectProvincieMenu;
