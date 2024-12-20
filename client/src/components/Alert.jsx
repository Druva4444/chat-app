import { useState } from "react";

export default function Alert({ type, message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between border px-4 py-2 rounded-md shadow-lg ${typeStyles[type]}`}
      role="alert"
    >
      <span className="text-sm">{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-lg font-bold text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
}
