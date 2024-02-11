import React from 'react';
import Banner from '../../components/Banner/Banner';
import Selected from '../../components/Selected/selected';

import './home.css'


export default function HomePage() {

    return (
        <div className='home-page-layout'>
            <Banner />
            <Selected />
        </div>
    )
}