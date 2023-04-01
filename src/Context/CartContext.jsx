import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const inCart = (id) => {
        return cart.some((e) => e.id === id);
      };
    
      const addToCart = (item) => {
        console.log(cart);
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
        console.log(cart);
    };

      const emptyCart = () => {
        setCart([]);
      };

      const getTotalQuantity = () => {
        return cart.reduce( (acc, e)=>{
          return acc + e.quantity
        } , 0 )
      };

      const getQuantity = (id)=>{
        const prodSel = cart.find( (e)=> e.id === id)
        return prodSel?.quantity
      }

      const getTotalPrice = () => {
        let totalPrice = cart.reduce((acc, e) => {
          return acc + e.quantity * e.precio;
        }, 0);
    
        return totalPrice;
      };
    
      const deleteProduct = ( id )=>{
        const newCart = cart.filter( (e)=> e.id !== id )
        setCart(newCart)
      }

      let data = {
        cart,
        addToCart,
        emptyCart,
        getTotalQuantity,
        getQuantity,
        getTotalPrice,
        deleteProduct
      };
    
      return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextProvider