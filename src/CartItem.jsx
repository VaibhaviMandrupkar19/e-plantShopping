import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <button type="button" className="brand" onClick={onHomeClick}>
          <span>🌿</span>
          Paradise Nursery
        </button>

        <div className="nav-links">
          <button type="button" onClick={onHomeClick}>
            Home
          </button>
          <button type="button" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </nav>

      <main className="cart-content">
        <p className="section-label">YOUR ORDER</p>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-card">
            <div className="empty-icon">🌱</div>
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started.</p>
            <button
              type="button"
              className="checkout-button"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-header">
              <span>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
              <span>Total: ₹{totalAmount}</span>
            </div>

            <div className="cart-list">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-details">
                      <h2>{item.name}</h2>
                      <p>₹{item.price} per plant</p>

                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(item)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-total">
                      <strong>₹{itemTotal}</strong>
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <div>
                <p>Total Items</p>
                <strong>{totalItems}</strong>
              </div>
              <div>
                <p>Total Amount</p>
                <strong>₹{totalAmount}</strong>
              </div>
              <button
                type="button"
                className="checkout-button"
                onClick={() => alert("Checkout coming soon!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;