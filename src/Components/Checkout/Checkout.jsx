import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import { BsTrash } from "react-icons/bs";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = ({ totalPrice }) => {
  const { cart, deleteProduct, emptyCart } = useContext(CartContext);
  const [finCompra, setFinCompra] = useState(true);

  return (
    <div>
    {
        !finCompra ? 
      (cart.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>Aquí está tu pedido</h2>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" onClick={emptyCart}>
              Eliminar pedido
            </Button>
            <Button variant="contained" onClick={() => setFinCompra(true)}>
              Finalizar compra
            </Button>
          </div>

          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Cantidad</TableCell>
                    <TableCell align="left">Precio unitario</TableCell>
                    <TableCell align="left">Total</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((e) => (
                    <TableRow key={e.id} sx={{ height: "200" }}>
                      <TableCell component="th" scope="row" align="center">
                        <img
                          src={e.imagen}
                          alt=""
                          height="150"
                          width="150"
                          object-fit="cover"
                        />
                      </TableCell>
                      <TableCell align="left">{e.nombre}</TableCell>
                      <TableCell align="left">{e.quantity}</TableCell>
                      <TableCell align="left">{e.precio}</TableCell>
                      <TableCell align="left">
                        {e.precio * e.quantity}
                      </TableCell>
                      <TableCell align="left">
                        <Button onClick={() => deleteProduct(e.id)}>
                          <BsTrash size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>TOTAL</TableCell>
                  <TableCell>{totalPrice}</TableCell>
                  <TableCell></TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <div>
          <h2>No hay nada</h2>
        </div>
      ))
      :
      (
        <CheckoutForm/>
      )
    }
    </div>
  );
};

export default Checkout;
