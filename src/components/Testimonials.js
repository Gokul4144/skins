import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = [
        {
          id: 1,
          name: "Sophia L.",
          feedback: "My skin has never felt this soft! The hydration cream is a game-changer—totally worth it.",
          avatar: "/images/customers/sophia.jpg"
        },
        {
          id: 2,
          name: "Maya D.",
          feedback: "I love how clean and light these products feel. No harsh chemicals and my acne is gone.",
          avatar: "/images/customers/maya.jpg"
        },
        {
          id: 3,
          name: "Elena R.",
          feedback: "Echo Skin's Vitamin C serum gave my skin such a beautiful glow in just two weeks.",
          avatar: "/images/customers/elena.jpg"
        }
      ];

      setTimeout(() => {
        setTestimonials(data);
      }, 500);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <h2 className="section-title">Loved by Real Customers</h2>
      {testimonials.length === 0 ? (
        <p>Loading testimonials...</p>
      ) : (
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <p className="testimonial-feedback">"{t.feedback}"</p>
              <p className="testimonial-name">– {t.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Embedded CSS */}
      <style jsx>{`
        .testimonials {
          margin-top: 60px;
          padding: 40px 20px;
          background-color: #fff5f0;
          text-align: center;
        }

        .section-title {
          font-size: 2rem;
          color: #5b3a29;
          margin-bottom: 20px;
        }

        .testimonial-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 24px;
        }

        .testimonial-card {
          background-color: #fff;
          border: 1px solid #f0e5e2;
          padding: 20px;
          border-radius: 8px;
          width: 280px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          text-align: left;
        }

        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 12px;
        }

        .testimonial-feedback {
          font-style: italic;
          margin-bottom: 10px;
          color: #5b3a29;
        }

        .testimonial-name {
          font-weight: bold;
          color: #3e2a1a;
        }

        @media (max-width: 768px) {
          .testimonial-grid {
            flex-direction: column;
            align-items: center;
          }

          .testimonial-card {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
}
