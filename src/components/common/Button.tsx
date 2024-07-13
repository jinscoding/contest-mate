import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "rounded transition duration-300 text-white focus:outline-none ",
  {
    variants: {
      color: {
        orange: "bg-orange-500 hover:bg-orange-700 ",
        blue: "bg-blue-900 hover:bg-blue-950 hover:text-white",
        gray: "bg-gray-500 hover:bg-gray-700 ",
      },
      size: {
        small: "px-2 py-1 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "medium",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children, color, size }: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonStyles({ color, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
