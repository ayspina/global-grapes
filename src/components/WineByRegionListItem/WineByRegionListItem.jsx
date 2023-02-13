export default function WineByRegionListItem({ wine }) {
    return (
        <>
        <h3>{wine.grape}</h3>
        <h5>{wine.producer}</h5>
        <h5>{wine.vintage}</h5>
        <img src={wine.wineImg[0]} alt="img" />
        </>
        
    )
};