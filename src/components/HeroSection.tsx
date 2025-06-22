import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-basecamp-cream">
      {/* Background Image */}
      <Image
        src="/images/hero-boise-sunset.png"
        alt="Boise skyline at sunset"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Basecamp is where men gather.
        </h1>
        <p className="text-xl md:text-2xl mb-4">
          Before the climb. Before the noise. Together.
        </p>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          A group for Christian men who want to grow in faith, build real friendships, and prepare for what life demands.
        </p>
        <CTAButton>Find your footing. Find your brothers.</CTAButton>
      </div>
    </section>
  );
}
