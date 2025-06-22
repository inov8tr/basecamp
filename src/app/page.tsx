import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-basecamp-sand text-basecamp-charcoal font-sans">
      <Navbar />
      <HeroSection />
      {/* You can add About, Events, Contact sections here */}
    </main>
  );
}
