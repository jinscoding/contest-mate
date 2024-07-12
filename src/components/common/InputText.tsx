import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const inputTextStyles = cva(
  "border rounded p-2 focus:outline-none text-base mb-4 mr-2",
  {
    variants: {
      size: {
        small: "w-40 h-10",
        medium: "w-60 h-10",
        large: "w-96 h-10",
      },
      color: {
        primary: "border-gray-300",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "primary",
    },
  }
);

interface InputTextProps extends VariantProps<typeof inputTextStyles> {
  placeholder: string;
}

const InputText = ({ placeholder, size, color }: InputTextProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={twMerge(inputTextStyles({ size, color }))}
    />
  );
};

export default InputText;
