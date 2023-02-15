import { Link } from 'react-router-dom'
import './NavBar.css';
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);

    };

    return (
    <nav className='NavBar'>
        <div className='header'>
            <h1>Global Grapes</h1>
            <p>Hello, {user.name}.</p>
        </div>
 
        <hr />

        <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/cart'>My Cart</Link>
        &nbsp; | &nbsp;
        <Link to='/regions' aria-haspopup='menu'>Wine Regions</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
        
        
    </nav>
)}


