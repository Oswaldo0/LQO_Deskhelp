export function Button({
  children,
  type = "button",
  disabled = false,
  className = "",
}) {
  const clasesBase =
    "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-2";
  const clasesEstado = disabled
    ? "bg-salte-200 text-slate-400 cursor-not-allowed"
    : "bg-blue-600 text-white hover:bg-blue-700: scale-[0.98] shadow-sm shadow-blue-300";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${clasesEstado} ${className} ${clasesBase}`}
    >
      {/* "Children" es lo que se pasa entre las etiquetas del componente */}
      {children}
    </button>
  );
}
