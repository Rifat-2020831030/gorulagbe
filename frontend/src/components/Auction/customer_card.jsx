import "./customer_card.css"

const Customer_card = ({cattle, cattle_image}) => {
    return(
        <div className="cattle_card">
            <img src={cattle_image} alt={cattle.name} />
            <div className="code-info"><span>Code:</span><span className="cattleid">{cattle.id}</span></div>
            <div className="ap">Asking Price</div>
            <span className="cattleprice"> {cattle.price} tk</span>
            <button onClick="" className="BID">BID</button>
            
        </div>
    )
}

export default Customer_card;