import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-basecamp-charcoal text-basecamp-cream text-sm px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo/Name */}
        <div className="text-center md:text-left font-semibold">
          BASECAMP
        </div>

        {/* Middle: Links */}
        <nav className="flex gap-4 text-basecamp-stone">
          <Link href="/" className="hover:text-basecamp-cream transition">Home</Link>
          <Link href="/about" className="hover:text-basecamp-cream transition">About</Link>
          <Link href="/join" className="hover:text-basecamp-cream transition">Join</Link>
          <Link href="/contact" className="hover:text-basecamp-cream transition">Contact</Link>
        </nav>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-xs text-basecamp-stone">
          © {new Date().getFullYear()} Basecamp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
