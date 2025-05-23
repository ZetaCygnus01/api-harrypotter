export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}