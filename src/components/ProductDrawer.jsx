
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const groups = ["electronics", "clothing", "food"];

function ProductDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        {groups.map((group) => (
          <ListItem
            button
            component={Link}
            to={`/products/${group}`}
            key={group}
          >
            <ListItemText
              primary={group.charAt(0).toUpperCase() + group.slice(1)}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default ProductDrawer;
