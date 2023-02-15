import './WineByRegionListItem.css';
import { Link } from 'react-router-dom';

export default function WineByRegionListItem({ wine }) {
    return (
        <div className='WineByRegionListItem'>
                <Link to={`/wines/${wine._id}`} wine={wine} style={{ textDecoration: 'none', color: 'black' }}><h3>{wine.type}</h3></Link>
        
        
        </div>
        
    )
};