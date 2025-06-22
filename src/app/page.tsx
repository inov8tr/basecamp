import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NextSection from "@/components/NextSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-basecamp-sand text-basecamp-charcoal font-sans">
      <Navbar />
      <HeroSection />

      {/* Bold Divider */}
      <div className="w-full h-4 bg-basecamp-charcoal" />

      {/* Lighter Follow-up Section */}
      <NextSection />
    </main>
  );
}
