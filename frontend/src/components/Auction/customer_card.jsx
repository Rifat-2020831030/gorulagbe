import "./customer_card.css"

const Customer_card = ({cattle, cattle_image}) => {
    return(
        <div className="cattle_card">
            <img src={cattle_image} alt={cattle.name} />
            <span>Code:</span>
            <span>{cattle.id}</span>
            <div>Asking Price</div>
            <span> {cattle.price} tk</span>
            <button onClick="" className="BID">BID</button>
            
        </div>
    )
}

export default Customer_card;