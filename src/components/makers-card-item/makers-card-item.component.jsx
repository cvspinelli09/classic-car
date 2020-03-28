import React from 'react';
import { withRouter } from 'react-router-dom';

import './makers-card-item.styles.scss';

import MakersCardItemDetailed from '../makers-card-item-detailed/makers-card-item-detailed.component';


const MakersCardItem = ({ items }) => {
    // console.log("MakersCardItem", items.items[0].cars);
    return (
    <div  
        className='makers-card'
        // style={{
        //     overflowY: "scroll",
        //     height: "580px"
        // }}
    >
        <div className='item-title-container'>
            <h2 className='title'>{`${items.items[0].title}`}</h2>
        </div>
        <div className='card-header'>
            <div
                className='logo-header'
                style={{
                    backgroundImage: `url(${items.items[0].logo})`
                }}
            />            
            <span className='text'>{`${items.items[0].makerText}`}</span>
        </div>
        <div className='content-card-container'>
            <div>
                <div className='subheader'>
                    <h3 className='subtitle'>models</h3>
                </div>
                <div>
                    <MakersCardItemDetailed items={items} />
                </div>
            </div>
        </div>
    </div>
)};

export default withRouter(MakersCardItem);
