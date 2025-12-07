import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      {children}
    </button>
  );
};

export default Button;
