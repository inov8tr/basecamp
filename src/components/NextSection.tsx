export default function NextSection() {
  return (
    <section className="bg-basecamp-sand text-basecamp-charcoal py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Find your footing. Find your brothers.
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          A group for Christian men who want to grow in faith, build real friendships,
          and prepare for what life demands.
        </p>
        <a
          href="/join"
          className="inline-block bg-basecamp-sand text-basecamp-charcoal border border-basecamp-charcoal font-medium px-6 py-3 rounded-xl shadow hover:bg-basecamp-cream transition"
        >
          Join the Brotherhood
        </a>
      </div>
    </section>
  );
}
