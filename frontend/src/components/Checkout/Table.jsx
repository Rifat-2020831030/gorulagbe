import cowImg from "../../assets/cow1.jpg";

const Table = ({ cartData, Charges, shipping }) => {
  function productTotal(item) {
    return item.price * item.quantity;
  }

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left font-semibold">Product</th>
          <th className="text-left font-semibold">Price</th>
          <th className="text-left font-semibold">Quantity</th>
          <th className="text-left font-semibold">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item) => (
          <tr key={item.id} className="border-solid border border-grey">
            <td className="py-4">
              <div className="flex items-center">
                <img
                  className="h-28 w-28 mr-4"
                  src={cowImg}
                  alt="Product image"
                />
                <span className="font-semibold">{item.name}</span>
              </div>
            </td>
            <td className="py-4">{item.price}</td>
            <td className="py-4">
              <div className="flex items-center">
                <button className="border rounded-md py-2 px-4 mr-2">-</button>
                <span className="text-center w-8">{item.quantity}</span>
                {/* disable this button */}
                <button className="border rounded-md py-2 px-4 ml-2" disabled>
                  +
                </button>
              </div>
            </td>
            <td className="py-4">{productTotal(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
