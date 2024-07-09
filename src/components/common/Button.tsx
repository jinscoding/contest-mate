import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className='px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
