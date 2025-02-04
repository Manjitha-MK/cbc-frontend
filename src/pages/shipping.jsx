import { useLocation, useNavigate } from "react-router-dom";
// import CartCard from "../../components/cartCard";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../components/cartCard";

export default function ShippingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.items;
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!cart) {
      toast.error("No items received");
      navigate("/cart");
      return;
    }

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: cart,
      })
      .then((res) => {
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch order quote. Please try again.");
        console.error(err);
      });
  }, [cart, navigate]);

  function validateInputs() {
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!address.trim()) {
      toast.error("Please enter your address.");
      return false;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  }

  function createOrder() {
    if (!validateInputs()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BACKEND_URL + "/api/orders",
        {
          orderedItems: cart,
          name,
          address,
          phone,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Order placed successfully!");
        navigate("/orders");
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  if (!cart) {
    return null;
  }

  return (
    <div className="w-full h-full p-4 bg-gray-100">
      <div className="w-full max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Shipping Details</h1>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <h2 className="mt-6 mb-4 text-xl font-bold">Order Summary</h2>
        <table className="w-full mb-4 border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Image</th>
              <th className="p-2 border border-gray-300">Product Name</th>
              <th className="p-2 border border-gray-300">Product ID</th>
              <th className="p-2 border border-gray-300">Qty</th>
              <th className="p-2 border border-gray-300">Price</th>
              <th className="p-2 border border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartCard
                key={item.productId}
                productId={item.productId}
                qty={item.qty}
              />
            ))}
          </tbody>
        </table>
        <h1 className="mb-2 text-lg font-bold text-gray-700">
          Total: LKR. {labeledTotal.toFixed(2)}
        </h1>
        <h1 className="mb-2 text-lg font-bold text-gray-700">
          Discount: LKR. {(labeledTotal - total).toFixed(2)}
        </h1>
        <h1 className="mb-4 text-lg font-bold text-gray-700">
          Grand Total: LKR. {total.toFixed(2)}
        </h1>
        <button
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          onClick={createOrder}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}