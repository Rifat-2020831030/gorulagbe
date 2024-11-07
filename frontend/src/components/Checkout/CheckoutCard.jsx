import { useState } from "react";

const CheckoutCard = ({ Subtotal, Charges, shipping, total}) => {
  

  return (
    <div className="md:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>৳{Subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Charges</span>
          <span>৳{Charges}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>৳{shipping}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">৳{total}</span>
        </div>
        <button className="bg-lime-400 text-white py-2 px-4 rounded-lg mt-4 w-full">
          Go to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
