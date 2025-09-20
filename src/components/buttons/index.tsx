interface ButtonProps {
  variant?: "primary" | "secondary" | "teriary" | "outline";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  onClick,
  className,
  children,
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary: "bg-primary-100 px-1 py-1 rounded-[8px]",
    secondary:
      "bg-white/90 hover:bg-white text-black font-medium px-4 py-2 rounded-full transition-all",
    teriary:
      "bg-primary-100 py-0.5 px-2.5 text-[10px] font-bold text-black dark:text-white hover:text-foreground rounded-3xl",
    outline: "text-xs text-blue-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}
