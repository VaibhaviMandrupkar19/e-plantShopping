import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2b0a?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 2,
        name: "Money Plant",
        price: 199,
        image:
          "https://images.unsplash.com/photo-1614594575821-0b1f5e5e5c52?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        id: 4,
        name: "Aloe Vera",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8c5b1b5?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 5,
        name: "Areca Palm",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: 6,
        name: "ZZ Plant",
        price: 349,
        image:
          "https://images.unsplash.com/photo-1632207691142-7e5a9a7a5d1a?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
];

function ProductList({ onHomeClick, onCartClick, totalItems }) {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="products-page">
      <nav className="navbar">
        <button type="button" className="brand" onClick={onHomeClick}>
          <span>🌿</span>
          Paradise Nursery
        </button>

        <div className="nav-links">
          <button type="button" onClick={onHomeClick}>
            Home
          </button>
          <button type="button" className="cart-nav-button" onClick={onCartClick}>
            🛒 Cart ({totalItems})
          </button>
        </div>
      </nav>

      <main className="products-content">
        <p className="section-label">OUR COLLECTION</p>
        <h1>Choose Your Plants</h1>
        <p className="products-intro">
          Bring nature home with beautiful plants selected for every space.
        </p>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.category}>
            <div className="category-heading">
              <h2>{category.category}</h2>
              <span>{category.plants.length} plants</span>
            </div>

            <div className="plant-grid">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p className="plant-price">₹{plant.price}</p>

                    <button
                      type="button"
                      className="add-button"
                      onClick={() => handleAddToCart(plant)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;