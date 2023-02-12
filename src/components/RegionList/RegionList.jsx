import RegionListItem from '../RegionListItem/RegionListItem'

export default function RegionList({ wineRegions }) {
    const regions = wineRegions.map(region => 
        <RegionListItem 
            key={region._id}
            wineRegion={region}
        />

    );
    return (
        <ul>
            {regions}
        </ul>
    )
}