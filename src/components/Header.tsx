import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
};

export default Header;
