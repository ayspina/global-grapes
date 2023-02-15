import { Link } from 'react-router-dom';

export default function WineByRegionListItem({ wine }) {
    return (
        <>
        <Link to={`/wines/${wine._id}`} wine={wine}><h3>{wine.grape}</h3></Link>
        <h5>{wine.producer}</h5>
        <h5>{wine.vintage}</h5>
        <img src={wine.wineImg[0]} alt="img" />
        </>
        
    )
};