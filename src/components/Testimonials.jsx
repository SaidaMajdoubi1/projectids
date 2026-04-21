import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Tech Enthusiast',
      text: 'Best cooling solution I\'ve ever used. Highly recommended!',
      avatar: '👨'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Professional Builder',
      text: 'Top-notch cooling system with excellent build quality.',
      avatar: '👩'
    },
    {
      id: 3,
      name: 'Mike Davis',
      role: 'Gamer',
      text: 'Perfect for my gaming rig. Keeps everything cool!',
      avatar: '🧑'
    }
  ]

  return (
    <section id="reviews" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Customer Reviews</h2>
          <p>What Our Customers Say</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <span className="avatar">{testimonial.avatar}</span>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
