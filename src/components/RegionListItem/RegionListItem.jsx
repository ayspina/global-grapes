import { Link } from 'react-router-dom';

export default function RegionListItem({ wineRegion }) {
    return (
        <li>
            <Link to={`/regions/${wineRegion._id}`} wineRegion={wineRegion}>
                {wineRegion.country}
            </Link>   
        </li>
        
    )
}