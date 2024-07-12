import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const titleStyles = cva("font-bold mb-4", {
  variants: {
    size: {
      small: "text-2xl",
      medium: "text-3xl",
      large: "text-4xl",
    },
    color: {
      primary: "text-black",
      secondary: "text-orange-500",
      tertiary: "text-gray-500",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});

interface TitleProps extends VariantProps<typeof titleStyles> {
  children: React.ReactNode;
}

const Title = ({ children, size, color }: TitleProps) => {
  return <h1 className={twMerge(titleStyles({ size, color }))}>{children}</h1>;
};

export default Title;
