import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";

const Navibar = () => {
    return (
        <ReactBootStrap.Navbar className="navbar">
            <h1>DHL</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Order</Link>
            </div>
        </ReactBootStrap.Navbar>
    );
}

export default Navibar;
