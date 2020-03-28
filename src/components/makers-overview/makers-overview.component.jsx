import React from 'react';
import { withRouter } from 'react-router-dom';

import './makers-overview.styles.scss';

import MakersCardItem from '../../components/makers-card-item/makers-card-item.component';


const MakersOverview = items => {
    
    return (
    <div>
        <MakersCardItem items={items}/>
    </div>
)};

export default withRouter(MakersOverview);