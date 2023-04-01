import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Checkout from "../Checkout/Checkout";

const CheckoutContainer = () => {
  const { getTotalPrice } = useContext(CartContext);

  let totalPrice = getTotalPrice();

  return (
    <div>
      <Checkout totalPrice={totalPrice} />
    </div>
  );
};

export default CheckoutContainer;
