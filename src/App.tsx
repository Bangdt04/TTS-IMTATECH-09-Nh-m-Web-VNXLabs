import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayoutCLient from "./layout/LayoutCLient";
import ProductDetailPage from "./pages/client/product-detail/ProductDetailPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutCLient />}>
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
