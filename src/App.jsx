import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [view, setView] = useState("landing");

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleGetStarted = () => {
    setView("products");
  };

  const handleCart = () => {
    setView("cart");
  };

  const handleHome = () => {
    setView("landing");
  };

  const handleContinueShopping = () => {
    setView("products");
  };

  return (
    <div className="app-container">
      {view === "landing" && (
        <div className="landing-page">
          <div className="background-image">
            <div className="hero-overlay">
              <div className="landing-content">
                <p className="eyebrow">GREEN • CALM • BEAUTIFUL</p>
                <h1>Welcome To Paradise Nursery</h1>
                <p className="tagline">Where Green Meets Serenity</p>
                <button
                  type="button"
                  className="get-started-button"
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <AboutUs />
        </div>
      )}

      {view === "products" && (
        <ProductList
          onHomeClick={handleHome}
          onCartClick={handleCart}
          totalItems={totalItems}
        />
      )}

      {view === "cart" && (
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHomeClick={handleHome}
        />
      )}
    </div>
  );
}

export default App;