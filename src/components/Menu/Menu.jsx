import "./Menu.css";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
        <div><Link to="/"  className="menu__item">Main</Link></div>
        <div><Link to="/game"  className="menu__item">Game</Link></div>
    </div>
  );
}

export default Menu;
