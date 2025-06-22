"use client";

export default function HeroTest() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-orange-500 to-purple-700 text-white flex items-center justify-center">
      <div className="text-center px-6 max-w-2xl z-10">
        <h1 className="text-5xl font-bold mb-4">This is a Test Hero</h1>
        <p className="text-2xl mb-6">
          If you see this text, Tailwind is working and the component is rendering.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-2 rounded shadow">
          Test Button
        </button>
      </div>
    </section>
  );
}
