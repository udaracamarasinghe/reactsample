
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>DHL</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Order</Link>
            </div>
        </nav>
    );
}

export default Navbar;
