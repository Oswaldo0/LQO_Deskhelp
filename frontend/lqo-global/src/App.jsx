import { Badge } from "./core/components/Badge";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-10 space-y-4">
      <h1 className="text-4xl font-black text-brown underline">Componentes</h1>

      <div className="mt-5 p-4 bg-red-500 rounded-xl text-black">
        Fondo rojo dentro de una tabla blanca
      </div>
      <div className="mt-5 flex gap-2">
        <Badge estado="Abierto" />
        <Badge estado="Cerrado" />
        <Badge estado="En Proceso" />
        <Badge estado="Pendiente" />
        <Badge estado="Alta Prioridad" />
        <Badge estado="Baja Prioridad" />
        <Badge estado="Media Prioridad" />
      </div>
    </div>
  );
}
