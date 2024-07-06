import React, { useState } from 'react';
import axios from 'axios';
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
    const [butcherData, setButcherData] = useState([]);
    const [getresponse, setGetResponse] = useState('');

    useState(async () => {
        const response = await axios.get(
            "http://localhost:3000/get/featured/butchers"
        );
        const result = response.data;
        setButcherData(result.data);

        if (result.status === '1') {
            setGetResponse(true);
        } else {
            setGetResponse(false);
        }
    }, []);
    return (
        <>
            <div className="cattle-list">
                <p className="heading">Butcher</p>
                <p className="subheading">Hire butcher from all over the country</p>
                <div className="butcher-list">
                    {
                        (getresponse) ? 
                        butcherData.map((butcher, index) => (
                            <Butcher key={butcher.butcher_id} butcher={butcher} image={butcher1} />
                        )) 
                        : 
                        <p>No butcher found</p>
                    }
                </div>
                <button className="view-all-button">VIEW ALL</button>
            </div>
        </>
    );
}

export default ButcherList;