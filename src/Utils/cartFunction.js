export function loadCart() {
    const email = localStorage.getItem("email");
  if (!email) return [];

  const cart = localStorage.getItem(`cart_${email}`);
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(productId, qty = 1) {
  if (!Number.isFinite(qty)) {
    console.error("Invalid quantity:", qty);
    return;
  }

  console.log("Adding to cart:", { productId, qty });
  const cart = loadCart();
  console.log("Current cart:", cart);

  const index = cart.findIndex((item) => {
    return item.productId == productId;
  });
  console.log(index);
  if (index == -1) {
    cart.push({ productId, qty });
  } else {
    const newQty = cart[index].qty + qty;
    if (newQty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].qty = newQty;
    }
  }
  saveCart(cart);
  console.log("Updated cart:", cart);
}

export function saveCart(cart) {
  const email = localStorage.getItem("email");
  if (!email) return;
  localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
}

export function deleteCart() {
   const email = localStorage.getItem("email");
  if (email) {
    localStorage.removeItem(`cart_${email}`);
  }
}

export function deleteItem(productId) {
  const cart = loadCart();
  const index = cart.findIndex((item) => {
    return item.productId == productId;
  });

  if (index != -1) {
    cart.splice(index, 1);
    saveCart(cart);
  }
}

export function qtyChange(productId, newQty) {
  const cart = loadCart();
  const index = cart.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    if (newQty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].qty = newQty;
    }
    saveCart(cart);
  }
}

export function selectProduct(productId) {
  const cart = loadCart();
  const index = cart.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    cart[index].selected = !cart[index].selected; // Toggle selected state
    saveCart(cart);
  }
}
