export default function CTAButton({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all";
  const variants = {
    primary: "bg-basecamp-orange text-white hover:bg-orange-600",
    secondary: "bg-transparent border border-basecamp-orange text-basecamp-orange hover:bg-basecamp-orange hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
