import { Button, TextField } from "@mui/material";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebaseConfig";

const CheckoutForm = ({ totalPrice, setOrderId }) => {
  const { cart, setCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let orden = {
      buyer: userData,
      items: cart,
      total: totalPrice,
    };
    let orderCollection = collection(db, "ordenes");
    addDoc(orderCollection, orden).then((res) => {
      setOrderId(res.id);
      setCart([]);
    });

    cart.map((e) => {
      let refDoc = doc(db, "productos", e.id);
      updateDoc(refDoc, { stock: e.stock - e.quantity });
    });
  };

  const [verif, setVerif] = useState(false);

  return (
    <div>
      <h1>Ingresa tus datos</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="nombre"
          label="Nombre"
          variant="outlined"
          value={userData.nombre}
          onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
        />
        <TextField
          id="apellido"
          label="Apellido"
          variant="outlined"
          value={userData.apellido}
          onChange={(e) =>
            setUserData({ ...userData, apellido: e.target.value })
          }
        />
        <TextField
          id="telefono"
          label="Teléfono"
          variant="outlined"
          value={userData.telefono}
          onChange={(e) =>
            setUserData({ ...userData, telefono: e.target.value })
          }
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          id="verifEmail"
          label="Verifica tu email"
          variant="outlined"
          onChange={(e) =>
            e.target.value === userData.email ? setVerif(true) : setVerif(false)
          }
        />
        {!verif ? (
          <Button variant="contained" type="submit" disabled>
            Comprar
          </Button>
        ) : (
          <Button variant="contained" type="submit">
            Comprar
          </Button>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
