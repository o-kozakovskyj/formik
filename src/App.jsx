/* eslint-disable react/prop-types */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Button,
  Stack,
} from "@mui/material";
import Home from "./pages/Home";
import ProductGroup from "./pages/ProductGroup";
import ProductDetail from "./pages/ProductDetail";
import ProductDrawer from "./components/ProductDrawer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

const drawerWidth = 240;

function LayoutWithDrawer({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <ProductDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isProductRoute = location.pathname.startsWith("/products");

  return (
    <>
      {isProductRoute ? (
        <LayoutWithDrawer>
          <Routes>
            <Route
              path="/products/:group/:product"
              element={<ProductDetail />}
            />
            <Route path="/products/:group" element={<ProductGroup />} />
          </Routes>
        </LayoutWithDrawer>
      ) : (
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      )}
    </>
  );
}

function Navigation() {
  return (
    <Stack direction="row" spacing={2} sx={{ ml: 3 }}>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/products/electronics">
        Products
      </Button>
      <Button color="inherit" component={Link} to="/registration">
        Registration
      </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
    </Stack>
  );
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Vite React MUI Shop
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
      <AppRoutes />
    </Router>
  );
}

export default App;
