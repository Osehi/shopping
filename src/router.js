import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import Products from "./pages/products/products";


export default function AppRoutes() {
  return (
    //   holds all pages on the page
    <Router>
      <Route exact path="/" component={Homepage} />
      {/* holds single page or component as you know and returns it when asked for on the page by which i m,ean clicked */}
      <Route exact path="/products" component={Products} />
    </Router>
  );
}
