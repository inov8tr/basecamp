"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-basecamp-cream overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-boise-sunset.webp"
        alt="Boise skyline at sunset"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Gradient Fade to Sand */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-basecamp-sand z-20 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-30 px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-md">
          Basecamp is where men gather.
        </h1>
        <p className="text-xl md:text-2xl mb-4">
          Before the climb. Before the noise. Together.
        </p>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          A brotherhood of Christian men — sharpening one another in faith, friendship, and purpose.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <CTAButton variant="secondary">Learn More</CTAButton>
          </Link>
          <Link href="/join">
            <CTAButton variant="primary">Join Now</CTAButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
