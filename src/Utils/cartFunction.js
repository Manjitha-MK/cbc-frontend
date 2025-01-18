export function loadCart() {
    const cart = localStorage.getItem("cart");
    if(cart!=null){
      return JSON.parse(cart)
    }else{
      return []
    }
  }