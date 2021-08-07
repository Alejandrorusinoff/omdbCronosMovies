import React from 'react';
import HomeComponent from '../components/homeComponent'

export default function ({homes}) {

    return(
        <div>
            <HomeComponent homes={homes}/>
        </div>
    )
}