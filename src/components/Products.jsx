import './Products.css'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'CoolMaster Pro',
      price: '$299',
      image: '🎯',
      description: 'Professional-grade cooling system'
    },
    {
      id: 2,
      name: 'ThermalFlow X',
      price: '$199',
      image: '❄️',
      description: 'Efficient thermal management'
    },
    {
      id: 3,
      name: 'IceCore Elite',
      price: '$399',
      image: '💎',
      description: 'Premium cooling experience'
    }
  ]

  return (
    <section id="bestsellers" className="products">
      <div className="products-container">
        <div className="section-header">
          <h2>Bestsellers</h2>
          <p>Top Rated Products</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button className="btn-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
