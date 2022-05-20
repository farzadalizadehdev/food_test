import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome Snappfood</h1>
      <Link className="home__link" to="/vendors">
        Vendors
      </Link>
    </div>
  );
};
export default Home;
