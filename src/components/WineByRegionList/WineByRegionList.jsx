import WineByRegionListItem from '../WineByRegionListItem/WineByRegionListItem';

export default function WineByRegionList({ wines }) {
    const wineItems = wines.map(wine =>
        <WineByRegionListItem
          key={wine._id}
          wine={wine}
        />
      );

    return (
        <>
        <h1>Wines from this region belong here</h1>
        <ul>
            {wineItems}
        </ul>
        </>

    )


};
