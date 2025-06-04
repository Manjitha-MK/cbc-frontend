import { useEffect, useState } from "react";
import { loadCart } from "../Utils/cartFunction";
import CartCard from "../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // const cartData = loadCart();
    setCart(loadCart());
    console.log(loadCart());

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/orders/quote", {
        orderedItems: loadCart(),
      })
      .then((res) => {
        // setTotal(res.data)
        console.log(res.data);
        if(res.data.total != null){
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }

      });
  }, []);

  function onOrderCheckoutClick() {
    navigate("/shipping",{
      state : {
        items : loadCart()
      }
    })

  }

  return (
    <div className="flex flex-col items-end w-full h-full overflow-y-scroll ">
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
        {cart.map((item) => {
          return (
            <CartCard
              key={item.productId}
              productId={item.productId}
              qty={item.qty}
            />
          );
        })}
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
