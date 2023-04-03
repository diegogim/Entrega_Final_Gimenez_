import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ prodSel, onAdd, qty }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image={prodSel.imagen}
            title={prodSel.descripcion}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prodSel.nombre} - ${prodSel.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prodSel.descripcion}
            </Typography>
          </CardContent>
          <ItemQuantitySelector onAdd={onAdd} stock={prodSel.stock} initial={qty} />
        </Card>
      </div>

      
    </div>
  );
};

export default ItemDetail;
