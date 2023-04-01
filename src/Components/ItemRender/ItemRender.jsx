import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const ItemRender = ({ item }) => {
  return (
    <Card sx={{ width: 400, height: "auto" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={item.imagen}
        title={item.descripcion}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}
        </Typography>
        <Box sx={{ height: 100 }}>
          <Typography variant="body2" color="text.secondary">
            {item.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.precio}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained">
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemRender;
