import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);

    };

    return (
    <nav>
        <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/new'>New Order</Link>
        &nbsp; | &nbsp;
        <Link to='/regions'>Wine Regions</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
        <p>Hello, {user.name}.</p>
    </nav>
)}


