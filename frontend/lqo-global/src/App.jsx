import { Button } from "./shared/components/Button.tsx";
import { Input } from "./shared/components/Input.tsx";
import { TicketsForm } from "./features/tickets/components/TicketsForm.jsx";

export default function App() {
  const handleInputChange = (valor) => {
    console.log("Valor ingresado:", valor);
  };

  return (
    <>
      <div className="p-10">
        <h1 className="mb-4">Prueba de input</h1>
        <Input placeholder="Ingrese un valor" onChange={handleInputChange} />
      </div>

      <div className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
        <Button label="Crear Ticket" onClick={() => alert("Ticket creado!")} />
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          Panel de soporte
        </h1>

        <TicketsForm />
      </div>
    </>
  );
}
