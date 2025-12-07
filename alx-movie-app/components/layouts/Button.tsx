import React from "react";
interface LayoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      {children}
    </button>
  );
};

export default LayoutButton;
