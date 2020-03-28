import React from 'react';
import { withRouter } from 'react-router-dom';
 
import './makerspage.styles.scss';

import MakersOverview from '../../components/makers-overview/makers-overview.component';

import CAR_DATA from '../../car.data';

const collections = CAR_DATA;

const MakersPage = props => {

    const items = collections.filter(items => items.title === props.match.params.categoryId)
  
    return (
        <div className='makers-page'>
            <MakersOverview items={items} />
        </div>
    )
};

export default withRouter(MakersPage); 