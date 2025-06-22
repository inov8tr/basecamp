import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NextSection from "@/components/NextSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-basecamp-sand text-basecamp-charcoal font-sans">
      <Navbar />
      <HeroSection />

      {/* Thin Divider */}
      <hr className="border-basecamp-charcoal" />

      {/* Lighter Follow-up Section */}
      <NextSection />
    </main>
  );
}
