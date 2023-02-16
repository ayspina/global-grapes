import { useState, useEffect } from 'react';
import './AllRegionsPage.css';
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
        <div className='AllRegionsPage'>
            <h1>Shop By Country</h1>
            <div className='regions-list'>
                <RegionList wineRegions={wineRegions} />
            </div>
            <div className='home-collage'>
                <img src="https://i.imgur.com/pgJBZV2.png" alt="home-collage" className='home-collage-img' />
            </div>
            
        </div>
    );    
};