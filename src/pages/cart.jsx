import { useEffect, useState } from "react";
import { loadCart } from "../Utils/cartFunction";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-y-scroll">
      {
        cart.map((item)=>{
            return(
                <span>{item.produvtId} * {item.qty}</span>
            )
        })
      }
    </div>
  );
}
