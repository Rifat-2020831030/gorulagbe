import React from 'react';
import './ButcherList.css';
import butcher1 from '../../../assets/butcher1.jpg';
import Butcher from '../butcherCard/Butcher';

const ButcherList = () => {
    const info = {
        name: 'Gilman MD Rijuan',
        location: 'Dhaka',
        rating: 4.5,
        rate: 5000,
    };
    return (
        <>
            <div className="cattle-list">
                <p className="heading">Butcher</p>
                <p className="subheading">Hire butcher from all over the country</p>
                <div className="butcher-list">
                    <Butcher image = {butcher1} info={info} />
                    <Butcher image = {butcher1} info={info} />
                    <Butcher image = {butcher1} info={info} />
                    <Butcher image = {butcher1} info={info} />
                </div>
                <button className="view-all-button">VIEW ALL</button>
            </div>
        </>
    );
}

export default ButcherList;