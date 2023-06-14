import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
        <div className="container bg-light">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="col">
                    <h2 className="text-success">My Books App</h2>
                </div>
                <div className="col">
                    <Link to="/">Home</Link>
                </div>
                <div className="col">
                    <Link to="/add" className="m-3">Add New Book</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;