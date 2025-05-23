export function Card({ children, className = '' }) {
  return (
    <div className={`bg-zinc-800 rounded-2xl p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="text-white">{children}</div>;
}