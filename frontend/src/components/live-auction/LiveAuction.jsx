import React from 'react';
import "./LiveAuction.css"

class LiveAuction extends React.Component {
    state = {
        remtime: ""
    }
    
    auctionTime = () => {
        let currentTime = new Date();
        let startTime = new Date("2024-06-12 10:00:00");
        let timeDiff = startTime - currentTime;
        let seconds = Math.floor(timeDiff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        hours %= 24;
        minutes %= 60;
        seconds %= 60;
        timeDiff = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        return timeDiff;
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.setState({ remtime: this.auctionTime() });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    render() {
        const { remtime } = this.state;
        return (
            <>
                <div className="auction-container">
                    <p className="heading">
                        Live Auction
                    </p>
                    <p className="subheading">Cattle prices fully in your hand</p>
                    <div className="auction-content">
                        <h1>{remtime===""?"There is NO Incoming Auction":"Incoming Auction"}</h1>
                        <p className="time">{remtime}</p>
                        <div className="auction-info">
                            <div className="auction-info-left">
                                <p>&#x21D2;Start Date : 12-06-24</p>
                                <p>&#x21D2;End Date : 14-06-24</p>
                                <p>&#x21D2;Seller : Taher Brother</p>
                            </div>
                            <div className="auction-info-right">
                                <p>&#x21D2;Starting Price : 100000</p>
                                <p>&#x21D2;Total Cow : 10</p>
                                <p>&#x21D2;Registered Total User : 300</p>
                            </div>
                        </div>
                        <button className='auction-button'>Register NOW</button>
                    </div>
                </div>
            </>
        );
    }
}

export default LiveAuction;

// date
// seller
// total cow
// starting price
// registered total user

