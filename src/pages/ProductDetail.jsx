
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

function ProductDetail() {
  const { group, product } = useParams();
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5">{product}</Typography>
        <Typography variant="body1">
          Details about {product} in {group}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductDetail;
