import "./Header.css";
import logo from "../../images/png.png";
import Menu from '../Menu/Menu';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__img-div"><Link to="/"><img src={logo} alt="logo" className="header__img"></img></Link></div>
        <div className="header__logo">English words</div>
        <Menu/>

    </div>
  );
}

export default Header;
