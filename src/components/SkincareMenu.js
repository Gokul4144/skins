import { useEffect, useState } from 'react';

export default function SkincareMenu() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); // track quantity per product
  const [cartItem, setCartItem] = useState(null); // the product added to cart for popup

  useEffect(() => {
    const skincareProducts = [
      {
        id: 1,
        name: "Hydrating Face x Cream",
        description: "Deep hydration for dry skin.",
        price: 29.99,
        image: "https://static.vecteezy.com/system/resources/previews/048/053/161/non_2x/a-pastel-paradise-of-skincare-products-png.png"
      },
      {
        id: 2,
        name: "Vitamin C Serum",
        description: "Brightens and evens skin tone.",
        price: 40.99,
        image: "https://png.pngtree.com/png-clipart/20230511/original/pngtree-3d-skin-care-products-exquisite-care-set-png-image_9157466.png"
      },
      {
        id: 3,
        name: "SPF 50 Sunscreen",
        description: "Broad-spectrum protection for all skin types.",
        price: 24.99,
        image: "https://png.pngtree.com/png-clipart/20230510/ourmid/pngtree-3d-skin-care-products-decorative-flowers-png-image_7091699.png"
      }
    ];

    setTimeout(() => {
      setProducts(skincareProducts);
      // Initialize all quantities to 1
      const initialQuantities = {};
      skincareProducts.forEach(p => (initialQuantities[p.id] = 1));
      setQuantities(initialQuantities);
    }, 500);
  }, []);

  const handleQuantityChange = (id, value) => {
    const qty = Math.max(1, Number(value)); // minimum 1
    setQuantities(prev => ({ ...prev, [id]: qty }));
  };

  const handleAddToCart = (product) => {
    setCartItem({
      ...product,
      quantity: quantities[product.id],
      totalPrice: (product.price * quantities[product.id]).toFixed(2),
    });
  };

  const closePopup = () => setCartItem(null);

  return (
    <section className="skincare-menu">
      <h2 className="section-title">Featured Skincare Products</h2>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>

              <div className="quantity-control">
                <label htmlFor={`qty-${product.id}`}>Qty:</label>
                <input
                  type="number"
                  id={`qty-${product.id}`}
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                />
              </div>

              <button className="btn-secondary" onClick={() => handleAddToCart(product)}>
                Add to Cart (${(product.price * (quantities[product.id] || 1)).toFixed(2)})
              </button>
            </div>
          ))
        )}
      </div>

      {/* Popup Modal */}
      {cartItem && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Added to Cart</h3>
            <img src={cartItem.image} alt={cartItem.name} className="modal-image" />
            <p><strong>{cartItem.name}</strong></p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Total Price: ${cartItem.totalPrice}</p>
            <button className="btn-close" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Styled JSX */}
      <style jsx>{`
        .skincare-menu {
          padding: 60px 20px;
          background-color: #fffdfb;
          text-align: center;
        }

        .section-title {
          font-size: 2rem;
          color: #5b3a29;
          margin-bottom: 32px;
        }

        .product-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }

        .product-card {
          background-color: #fff;
          border: 1px solid #f2e6e3;
          border-radius: 10px;
          width: 260px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 12px;
        }

        .product-name {
          font-size: 1.2rem;
          color: #3e2a1a;
          margin-bottom: 8px;
        }

        .product-description {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 10px;
        }

        .product-price {
          font-weight: bold;
          color: #5b3a29;
          margin-bottom: 12px;
        }

        .quantity-control {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .quantity-control input {
          width: 50px;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
          text-align: center;
        }

        .btn-secondary {
          background-color: #f0c4b1;
          color: #3e2a1a;
          border: none;
          padding: 10px 18px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: #e5b8a4;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          padding: 24px;
          border-radius: 12px;
          width: 320px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          position: relative;
        }

        .modal-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .btn-close {
          margin-top: 20px;
          background: #e3b6a1;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          color: #3e2a1a;
          transition: background-color 0.3s ease;
        }

        .btn-close:hover {
          background: #d9a98f;
        }

        @media (max-width: 768px) {
          .product-grid {
            flex-direction: column;
            align-items: center;
          }

          .product-card {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
}
