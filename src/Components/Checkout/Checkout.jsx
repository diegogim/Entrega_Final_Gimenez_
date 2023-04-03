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
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { BsTrash } from "react-icons/bs";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";

const Checkout = ({ totalPrice }) => {
  const { cart, deleteProduct, emptyCart } = useContext(CartContext);
  const [finCompra, setFinCompra] = useState(false);
  const [orderId, setOrderId] = useState(null);

  return (
    <div>
      {!orderId ? (
        !finCompra ? (
          cart.length > 0 ? (
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
              }}
            >
              <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginBottom: 5 }}
                  >
                    Aún no has agregado nada a tu carrito
                  </Typography>
                  <Typography variant="body2">
                    Da click abajo para comprar
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/">
                    <Button size="small" variant="contained">
                      Ir a la tienda
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          )
        ) : (
          <CheckoutForm totalPrice={totalPrice} setOrderId={setOrderId} />
        )
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Aquí está tu comprobante:
                </Typography>
                <Typography variant="h2">{orderId}</Typography>
              </CardContent>
              <CardActions>
                <Link to="/">
                  <Button size="small">Seguir comprando</Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
