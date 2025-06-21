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
    <div className="flex flex-col max-w-5xl min-h-screen p-6 mx-auto">
      {/* User email info */}
      {email && (
        <h2 className="mb-4 text-lg font-semibold text-center text-gray-800 md:text-left">
          Logged in as:{" "}
          <span className="font-bold text-black">{email}</span>
        </h2>
      )}

      {/* Responsive Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-orange-200">
            <tr>
              {["Image", "Product Name", "Product ID", "Qty", "Price", "Total", "Delete"].map((header) => (
                <th key={header} className="p-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {cart.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-6 font-medium text-center text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cart.map((item) => (
                <CartCard
                  key={item.productId}
                  productId={item.productId}
                  qty={item.qty}
                  onQtyChange={handleQtyChange}
                  onSelect={handleSelect}
                  onDelete={() => handleDeleteItem(item.productId)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Totals & Actions */}
      <div className="flex flex-col items-center justify-between gap-4 p-4 mt-6 bg-orange-100 rounded-lg shadow-md sm:flex-row">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-lg font-semibold text-orange-700">
            Total: LKR. {labeledTotal.toFixed(2)}
          </p>
          <p className="text-base text-orange-600">
            Discount: LKR. {(labeledTotal - total).toFixed(2)}
          </p>
          <p className="text-xl font-bold text-orange-800">
            Grand Total: LKR. {total.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleClearCart}
            className="px-6 py-2 text-white transition-colors duration-200 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
          >
            Clear Cart
          </button>
          <button
            onClick={onOrderCheckoutClick}
            className="px-6 py-2 text-white transition-colors duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
            disabled={cart.length === 0}
            title={cart.length === 0 ? "Cart is empty" : "Proceed to checkout"}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
