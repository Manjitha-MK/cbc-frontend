import { useEffect, useState } from "react";
import {
  loadCart,
  qtyChange,
  deleteItem,
  selectProduct,
  deleteCart,
} from "../Utils/cartFunction";
import CartCard from "../components/CartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  useEffect(() => {
    const cartData = loadCart();
    setCart(cartData);
    calculateTotals(cartData);
  }, []);

  const calculateTotals = async (cartItems) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`, {
        orderedItems: cartItems,
      });
      if (res.data.total != null) {
        setTotal(res.data.total);
        setLabeledTotal(res.data.labeledTotal);
      }
    } catch (error) {
      console.error("Error calculating totals:", error);
    }
  };

  const handleQtyChange = (productId, newQty) => {
    qtyChange(productId, newQty);
    const updatedCart = loadCart();
    setCart(updatedCart);
    calculateTotals(updatedCart);
  };

  const handleSelect = (productId) => {
    selectProduct(productId);
    setCart(loadCart());
  };

  const handleDeleteItem = (productId) => {
    deleteItem(productId);
    const updatedCart = loadCart();
    setCart(updatedCart);
    calculateTotals(updatedCart);
  };

  const handleClearCart = () => {
    deleteCart();
    setCart([]);
    setTotal(0);
    setLabeledTotal(0);
  };

  const onOrderCheckoutClick = () => {
    navigate("/shipping", {
      state: {
        items: loadCart(),
      },
    });
  };

  return (
    <div className="flex flex-col items-end w-full h-full overflow-y-scroll ">
      {/* ✅ Show email here */}
      {email && (
        <h2 className="self-start px-4 text-lg font-medium text-gray-700">
          Logged in as: <span className="text-black">{email}</span>
        </h2>
      )}

      <table className="w-full">
        <thead className="">
          <tr className="">
            <th>Image</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
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

      <h1 className="text-3xl font-bold text-accent">
            Total: LKR. {labeledTotal.toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-accent">
            Discount: LKR. {(labeledTotal - total).toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-accent">
            Grand Total: LKR. {total.toFixed(2)}
      </h1>

          <button
            onClick={onOrderCheckoutClick}
        className="bg-red-400 text-white p-2 rounded-lg w-[300px]"
          >
            Checkout
          </button>
    </div>
  );
}
