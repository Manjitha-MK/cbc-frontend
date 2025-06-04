import { useLocation, useNavigate } from "react-router-dom";
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
      .then(() => {
        toast.success("Order placed successfully!");
        navigate("/orders");
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  if (!cart) return null;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-md sm:p-6">
        <h1 className="mb-6 text-xl font-bold sm:text-2xl">Shipping Details</h1>

        {/* Form */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              rows="3"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Order Summary */}
        <h2 className="mt-8 mb-4 text-lg font-semibold sm:text-xl">Order Summary</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300 rounded-md">
            <thead className="text-gray-700 bg-gray-200">
              <tr>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Qty</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Total</th>
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
        </div>

        {/* Totals */}
        <div className="mt-6 space-y-1 text-right text-gray-700">
          <p className="font-medium">Total: LKR. {labeledTotal.toFixed(2)}</p>
          <p className="font-medium">Discount: LKR. {(labeledTotal - total).toFixed(2)}</p>
          <p className="text-lg font-bold">Grand Total: LKR. {total.toFixed(2)}</p>
        </div>

        {/* Button */}
        <button
          onClick={createOrder}
          className="w-full py-3 mt-6 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
