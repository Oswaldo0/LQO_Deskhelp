import { Badge } from "./core/components/Badge";
import { Button } from "./core/components/Button";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 p-10 space-y-4">
        <h1 className="text-4xl font-black text-brown underline">
          Componentes
        </h1>

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
        {/*Botones*/}
      </div>
      <div className="bg-white p6 rounded-2x1 shadow-sm border border-slate-100 space-y-4 max-w-md">
        <h3 className="text-sm font-semibold text-slate700">Botones</h3>

        <div className="space-y-2">
          {/*Botón normal*/}
          <Button>Asignarme Ticket</Button>

          {/*Botón deshabilitado*/}
          <Button disabled={true}>Guardar en la base de datos</Button>
          {/*Botón persoalizado*/}
          <Button className="w-full bg-slate-900 hover:bg-slate-800">
            Cerrar sesión
          </Button>
        </div>
      </div>
    </>
  );
}
