import { useEffect, useState } from "react";
import Table from "./Table";
import CheckoutCard from "./CheckoutCard";

// const cartData = [
//   {
//     id: 1,
//     name: "Cow",
//     price: 19000,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Cow",
//     price: 20000,
//     quantity: 2,
//   },
//   {
//     id: 3,
//     name: "Cow",
//     price: 12000,
//     quantity: 1,
//   },
//   {
//     id: 4,
//     name: "Cow",
//     price: 32000,
//     quantity: 1,
//   },
// ];

const Checkout = () => {
  const [shipping, setShipping] = useState(20);
  const [Charges, setCharges] = useState(1.99);
  const [total, setTotal] = useState(0);
  const [Subtotal, setSubtotal] = useState(0);
  const [cartedList, setCartedList] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    console.log("carted list from local storage: ",JSON.parse(localStorage.getItem("cart")));
    fetch(`http://localhost:3000/get/cattle/cattle_id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ids: JSON.parse(localStorage.getItem("cart")) || []}),
    })
      .then((res) => res.json())
      .then((response) => {
        if(response.status){
          console.log(response.data);
          setCartData(response.data);
        }
      })
      .catch((err) => console.log(err)
    )

  }, []);

  function calculateSubTotal() {
    let temptotal = 0;
    cartData.forEach((item) => {
      temptotal += productTotal(item);
    });
    setSubtotal(temptotal);
    console.log("Subtotal: ",Subtotal);
  }

  function productTotal(item) {
    return item.price * 1;
  }

  function calculateTotal() {
    // console.log(Subtotal)
    let sum = Subtotal + Charges + shipping;
    setTotal(sum);
  }

  useEffect(() => {
    calculateSubTotal();
    calculateTotal();
  }, [cartData]);
  
  useState(() => {
    calculateTotal();
  }, [Subtotal, Charges, shipping, cartData]);

  return (
    <>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4 mx-20">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/5 mx-20">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <Table
                  cartData={cartData}
                  Charges={Charges}
                  shipping={shipping}
                />
              </div>
            </div>
            <CheckoutCard
              Charges={Charges}
              shipping={shipping}
              total={total}
              Subtotal={Subtotal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
