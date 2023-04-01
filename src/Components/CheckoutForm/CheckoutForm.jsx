import { Button, TextField } from "@mui/material";
import { useState } from "react";

const CheckoutForm = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
          onChange={(e) => e.target.value === userData.email ? setVerif(true) : setVerif(false)}
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
