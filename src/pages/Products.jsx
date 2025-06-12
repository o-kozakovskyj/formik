
import { Routes, Route } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import ProductDrawer from "../components/ProductDrawer";
import ProductGroup from "./ProductGroup";
import ProductDetail from "./ProductDetail";

function Products() {
  return (
    <Box sx={{ display: "flex" }}>
      <ProductDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path=":group/:product" element={<ProductDetail />} />
          <Route path=":group" element={<ProductGroup />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Products;
