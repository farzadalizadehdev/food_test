import { Link } from "react-router-dom";
import logo from "../../assets/images/snappfood.svg";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link to={`/`}>
        <img className="logo" src={logo} alt="snapfood logo" />
      </Link>
    </header>
  );
};
export default Header;
