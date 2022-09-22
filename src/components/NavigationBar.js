import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container" data-testid="navbar-page">
    <h1>Math Magician</h1>
    <ul className="navbar">
      <li data-testid="li"><Link to="/">Home</Link></li>
      <li data-testid="li"><Link to="/Calculator">Calculator</Link></li>
      <li data-testid="li"><Link to="/Quote">Quote</Link></li>
    </ul>
  </div>
);
export default Navbar;
