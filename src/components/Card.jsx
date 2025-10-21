export default function Card({ children, className='' }){ return <div className={`rounded-2xl border p-4 shadow-sm bg-white dark:bg-gray-900 ${className}`}>{children}</div>; }
