import Link from 'next/link';
import SkincareMenu from '../components/SkincareMenu';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <div className="logo">gokul Skincare</div>
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/shop" className="nav-link">Shop</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Nourish Your Natural Glow</h1>
          <p className="hero-subtitle">
            Discover clean, cruelty-free skincare made with love. Carefully crafted to soothe, protect, and beautify all skin types.
          </p>
          <Link href="/shop">
            <button className="btn btn-primary">Explore Products</button>
          </Link>
        </div>
      </section>

      <SkincareMenu />
      <Testimonials />

      <footer className="footer">
        <div className="footer-nav">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/shop" className="footer-link">Shop</Link>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <p>© 2025 Echo Skin. All rights reserved.</p>
      </footer>

      {/* ✅ Scoped CSS */}
      <style jsx>{`
        .header {
          background: #fff;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #5b3a29;
        }

        .nav {
          display: flex;
          gap: 20px;
        }

        .nav-link {
          color: #5b3a29;
          font-weight: 500;
          text-decoration: none;
        }

        .nav-link:hover {
          text-decoration: underline;
        }

        .hero {
          background-color: #fff8f3;
          padding: 80px 20px;
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
          color: #3e2a1a;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #6b4e3d;
          max-width: 600px;
          margin: 0 auto 30px;
        }

        .btn {
          padding: 12px 24px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn-primary {
          background-color: #e3b6a1;
          color: #3e2a1a;
          border: none;
        }

        .btn-primary:hover {
          background-color: #d9a98f;
        }

        .footer {
          background-color: #f6ebe4;
          padding: 30px 20px;
          text-align: center;
          margin-top: 60px;
        }

        .footer-nav {
          margin-bottom: 12px;
        }

        .footer-link {
          margin: 0 12px;
          color: #5b3a29;
          text-decoration: none;
          font-weight: 500;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .nav {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
