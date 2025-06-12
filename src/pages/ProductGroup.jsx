
import { useParams, Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const groups = {
  electronics: ["TV", "Laptop", "Camera"],
  clothing: ["Shirt", "Jeans", "Jacket"],
  food: ["Apple", "Bread", "Cheese"],
};

function ProductGroup() {
  const { group } = useParams();
  return (
    <Box>
      <Typography variant="h4">
        {group.charAt(0).toUpperCase() + group.slice(1)}
      </Typography>
      <List>
        {groups[group]?.map((product) => (
          <ListItem
            button
            component={Link}
            to={`/products/${group}/${product}`}
            key={product}
          >
            <ListItemText primary={product} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ProductGroup;
