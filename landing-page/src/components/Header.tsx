"use client";

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Forecasts', href: '/#products' },
  { label: 'Climate Services', href: '/#services' },
  { label: 'Early Warnings', href: '/#alerts' },
  { label: 'Publications', href: 'https://new.acmad.org/products/' },
  { label: 'News & Events', href: '/#updates' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <p>African Regional Climate Centre · Continental Multi-Hazard Advisory Centre</p>
          <div className="utility-links">
            <a href="https://new.acmad.org/contact-us/">Contact</a>
            <a href="https://new.acmad.org/subscribe/">Subscribe</a>
            <button type="button">EN <ChevronDown size={13} /></button>
          </div>
        </div>
      </div>
      <nav className="main-nav" aria-label="Primary navigation">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="ACMAD home">
            <Image src="/acmad-logo.jpg" alt="" width={54} height={54} priority />
            {/* <span><strong>ACMAD</strong><small>Climate services for Africa</small></span> */}
          </Link>
          <div className="nav-links desktop-only">
            {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
          {/* <div className="nav-actions desktop-only">
            <button className="search-button" aria-label="Search"><Search size={19} /></button>
            <a href="http://localhost:5173" className="portal-link">Staff portal <ChevronDown size={14} /></a>
          </div> */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="container">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
            ))}
            <a href="http://localhost:5173" className="portal-link">Staff portal</a>
          </div>
        </div>
      )}
    </header>
  );
}
