import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const inCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const addToCart = (item) => {
    let exists = inCart(item.id);

    if (exists) {
      let newCart = cart.map((e) => {
        if (e.id === item.id) {
          return {
            ...e,
            quantity: item.quantity,
          };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      timer: "1000",
      showConfirmButton: false,
    });
  };

  const emptyCart = () => {
    Swal.fire({
      title: "¿Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          title: "Carrito vacío",
          icon: "success",
          timer: "1000",
          showConfirmButton: false,
        });
      }
    });
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
  };

  const getQuantity = (id) => {
    const prodSel = cart.find((e) => e.id === id);
    return prodSel?.quantity;
  };

  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, e) => {
      return acc + e.quantity * e.precio;
    }, 0);

    return totalPrice;
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar este producto?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = cart.filter((e) => e.id !== id);
        setCart(newCart);
        Swal.fire({
          title: "Carrito vacío",
          icon: "success",
          timer: "1000",
          showConfirmButton: false,
        });
      }
    });
  };

  let data = {
    cart,
    addToCart,
    emptyCart,
    getTotalQuantity,
    getQuantity,
    getTotalPrice,
    deleteProduct,
    setCart
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
