import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import Home from "./componentes/Home";
import Store from "./componentes/Store";
import ProductDetail from "./componentes/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Ornamental Fish Farm</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:storeId" element={<Store />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
