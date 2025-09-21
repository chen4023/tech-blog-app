import { cn } from "@/utils/style";
import { cva } from "class-variance-authority";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "none";
  size?: "sm" | "md" | "lg";
}
const buttonVariants = cva(
  "flex items-center justify-center rounded-md text-sm cursor-pointer font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-pink-500 text-gray-50 hover:bg-pink-600",
        secondary: "bg-pink-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border border-input bg-pink-background hover:bg-accent hover:text-accent-foreground",
        none: "justify-center text-slate-600 hover:text-slate-900",
      },
      size: {
        sm: "h-9 px-2 py-2",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8 py-6",
      },
    },
  }
);

export default function Button({ variant = "primary", size = "md", ...props }: ButtonProps) {

  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props} />
  );
}

