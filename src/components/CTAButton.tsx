export default function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-basecamp-forest text-white px-6 py-3 rounded-xl hover:bg-basecamp-pine transition">
      {children}
    </button>
  );
}
