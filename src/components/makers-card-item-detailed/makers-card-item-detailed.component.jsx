import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "../img/octane.svg";

import './makers-card-item-detailed.styles.scss';

const MakersCardItemDetailed = ({ items }) => {
    console.log(items.cars);
    return (
        <div className='card'>
            {items.items[0].cars.map(items => (  
                <div className="flip-card">            
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img 
                                src={`${items.imageUrl ? items.imageUrl : Logo }`}
                                alt="Avatar"  
                                className={items.imageUrl ? "image" : "noBorder"}
                            />
                            <h1 className="card-title">{`${items.name}`}</h1>
                            <p className="dark">Years Produced: {`${items.specifications.YearsProduced}`}</p>
                            <p className="bright">Performance: {`${items.specifications.Perfomance}`}</p>
                            <p className="dark">Power / Toque: {`${items.specifications.PowerAndtorque}`}</p>
                            <p className="bright">Engine: {`${items.specifications.Engine}`}</p>
                            <p className="dark">Drivetrain: {`${items.specifications.Drivetrain}`}</p>
                            <p className="bright">Structure: {`${items.specifications.Structure}`}</p>
                            <p className="dark">Transmission: {`${items.specifications.Transmission}`}</p>
                            <p className="bright">Weight: {`${items.specifications.Weight}`}</p>
                        </div>
                        <div className="flip-card-back">
                            <h1 className="item-name">{`${items.name}`}</h1>
                            <h4 className='card-car-text'>{`${items.modelText}`}</h4>
                            <span className='price-guide-title'>Price guide</span>
                            <p className='price-lines'>Launch Price: {`${items.PriceGuide.LaunchPrice}`}</p>
                            <p className='price-lines'>Excellent: {`${items.PriceGuide.Excellent}`}</p>
                            <p className='price-lines'>Good: {`${items.PriceGuide.Good}`}</p>
                            <p className='price-lines'>Average: {`${items.PriceGuide.Average}`}</p>
                            <p className='price-lines'>Project: {`${items.PriceGuide.Project}`}</p>
                        </div>
                    </div>  
                </div>
            ))}
        </div>
)};

export default withRouter(MakersCardItemDetailed);
