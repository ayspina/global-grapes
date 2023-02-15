import './WineByRegionList.css';
import WineByRegionListItem from '../WineByRegionListItem/WineByRegionListItem';

export default function WineByRegionList({ wines }) {
    const wineItems = wines.map(wine =>
        <WineByRegionListItem
          key={wine._id}
          wine={wine}
        />
      );

    return (
        <div className='WineByRegionList'>
        <ul>
            {wineItems}
        </ul>
        </div>

    )


};
