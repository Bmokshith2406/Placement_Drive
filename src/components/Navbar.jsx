import { Component } from "react";
import "./Navbar.css";
import { Menuitems } from "./Menuitems";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
      <header>
      <nav className="NavItems">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <ul className="nav-menu">
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </header>
      </>
    );
  }
}
export default Navbar;
