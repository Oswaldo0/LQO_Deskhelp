export function Badge(props) {
  const estilosPorEstados = {
    Abierto: "bg-blue-100 text-blue-800 border border-blue-300",
    Cerrado: "bg-red-500 text-white",
    "En Proceso": "bg-yellow-500 text-black",
    Pendiente: "bg-gray-500 text-white",
    "Alta Prioridad": "bg-orange-500 text-white",
    "Baja Prioridad": "bg-blue-500 text-white",
    "Media Prioridad": "bg-purple-500 text-white",
  };
  const estiloElegido =
    estilosPorEstados[props.estado] || estilosPorEstados["Baja Prioridad"];
  return (
    <span className={`px-2 py-1 rounded ${estiloElegido}`}>{props.estado}</span>
  );
}
