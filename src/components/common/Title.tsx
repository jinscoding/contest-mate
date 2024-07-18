import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const titleStyles = cva("mb-1", {
  variants: {
    size: {
      small: "font-semibold text-lg",
      medium: "font-bold text-2xl",
      large: "font-bold text-3xl",
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
