import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WineByRegionList from '../../components/WineByRegionList/WineByRegionList'
import * as regionsAPI from '../../utilities/regions-api';
import * as winesAPI from '../../utilities/wines-api'


export default function RegionDetailPage() {
    const [wineRegion, setWineRegion] = useState([]);
    const [wines, setWines] = useState([]);
    let { id } = useParams();

    useEffect(function () {
        async function getAllWines(id) {
            const wines = await regionsAPI.getAllWines(id);
            setWines(wines);
            console.log(wines);
        }
        getAllWines(id);
    }, []);

    useEffect(function () {
        async function getRegion(id) {
            const region = await regionsAPI.getById(id);
            setWineRegion(region);
        }
        getRegion(id);
    }, []);




    return (
        <>
            <h1>{wineRegion.country}</h1>
            <WineByRegionList wines={wines.filter(wine => wine.region.country === wineRegion.country)} />
        </>
    )
};