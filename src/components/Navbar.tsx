"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/basecamp-logo.png"
            alt="Basecamp Logo"
            width={48}
            height={48}
            className="hover:opacity-90 transition"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-basecamp-cream font-semibold text-lg">
          <Link href="#about" className="hover:text-basecamp-clay transition">About</Link>
          <Link href="#events" className="hover:text-basecamp-clay transition">Events</Link>
          <Link href="#contact" className="hover:text-basecamp-clay transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
