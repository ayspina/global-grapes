import { Link } from 'react-router-dom'
import './NavBar.css';
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);

    };

    return (
    <>
     <nav className='NavBar'>
        <div className='nav1'>
            <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/cart'>My Cart</Link>
            &nbsp; | &nbsp;
            <Link to='/regions'>Countries</Link>
        </div>       
        <div className='logo'>
             <img src="https://i.imgur.com/a6LPjie.png" alt="" className='logo-img' />
        </div>
        <div className='nav3'>
            <p>Hello, {user.name}.</p>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link>
        </div>
        
    </nav>
    <hr />
    </>
   
)}


