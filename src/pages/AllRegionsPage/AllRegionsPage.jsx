import { useState, useEffect } from 'react';
import RegionList from '../../components/RegionList/RegionList';
import * as regionsAPI from '../../utilities/regions-api';

export default function AllRegionsPage() {
    const [wineRegions, setWineRegions] = useState([]);

    useEffect(function() {
        async function getRegions() {
            const regions = await regionsAPI.getAll();
            setWineRegions(regions);
        }
        getRegions();
    }, []);

    return (
        <>
            <h1>Select A Region</h1>
            <RegionList wineRegions={wineRegions} />
        </>
    );    
};