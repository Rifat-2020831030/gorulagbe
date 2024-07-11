import "./customer_card.css"

const Customer_card = ({cattle, cattle_image}) => {
    return(
        <div className="cattle_card">
            <img src={cattle_image} alt={cattle.name} />
            <span>Code:</span>
            <span>{cattle.id}</span>
            <span>Asking Price</span>
            <span>{cattle.price}</span>
            <button onClick="">BID</button>
            
        </div>
    )
}

export default Customer_card;