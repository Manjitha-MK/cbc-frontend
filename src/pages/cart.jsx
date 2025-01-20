import { useEffect, useState } from "react";
import { loadCart } from "../Utils/cartFunction";
import CartCard from "../components/cartCard";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = loadCart();
    console.log(cartData);
    setCart(loadCart());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-y-scroll bg-white">
      {cart.map((item) => {
        return (
          <CartCard
            key={item.productId}
            productId={item.productId}
            qty={item.qty}
          />
        );
      })}
    </div>
  );
}
