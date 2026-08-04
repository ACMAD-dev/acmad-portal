import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <Image src="/acmad-logo.jpg" alt="" width={54} height={54} />
            <span><strong>ACMAD</strong><small>Climate services for Africa</small></span>
          </Link>
          <p>Advancing weather and climate services for sustainable development across Africa.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/about">About ACMAD</Link>
          <Link href="/#services">Climate services</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#updates">News & events</Link>
        </div>
        <div className="footer-column">
          <h2>Resources</h2>
          <a href="https://new.acmad.org/products/">Publications</a>
          <a href="https://new.acmad.org/subscribe/">Subscribe</a>
          <a href="https://new.acmad.org/contact-us/">Contact</a>
          <a href="http://localhost:5173">Staff portal</a>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <p><MapPin size={17} /> Niamey, Republic of Niger</p>
          <p><Mail size={17} /> acmad@acmad.org</p>
          <p><Phone size={17} /> +227 20 73 49 92</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ACMAD. All rights reserved.</span>
        <div><a href="#">Privacy</a><a href="#">Accessibility</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}
