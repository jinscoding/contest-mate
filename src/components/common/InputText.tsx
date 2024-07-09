import React, { ForwardedRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: "text" | "number";
}

const InputText = React.forwardRef(
  (
    { placeholder, inputType, onChange, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type={inputType}
        className='px-4 py-2 border border-gray-300 rounded focus:outline-none  mb-2'
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

export default InputText;
