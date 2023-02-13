import './RegionList.css';
import RegionListItem from '../RegionListItem/RegionListItem';
import RegionDetailPage from '../../pages/RegionDetailPage/RegionDetailPage';

export default function RegionList({ wineRegions }) {
    const regions = wineRegions.map(region => 
        <RegionListItem 
            key={region._id}
            wineRegion={region}
        />    
    );

    const regionDetails = <RegionDetailPage wineRegions={wineRegions} />

    return (
        <ul className='RegionList'>
            {regions}
        </ul>
    )
}