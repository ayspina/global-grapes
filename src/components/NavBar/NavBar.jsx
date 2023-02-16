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
            <div className='logo'>
                <img src="https://i.imgur.com/a6LPjie.png" alt="" className='logo-img' />
            </div>
            <p>Hello, {user.name}.</p>
        </div>
 
        <hr />

        <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/cart'>My Cart</Link>
        &nbsp; | &nbsp;
        <Link to='/regions' role='button' aria-haspopup='menu'>Wine Regions</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
        
        
    </nav>
)}


