import React, { useState } from "react";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

export const TicketsForm = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Esto hace que la página no se recargue al enviar el formulario

    console.log("Enviando ticket");
    console.log({ titulo, descripcion });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold text-gry-800 mb-2">
        Crear nuevo Ticket
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Problema que se presenta
        </label>
        {/*Input que será reautilizado para el título del ticket*/}
        <Input
          placeholder="Error al conectar la impresora"
          onChange={(valor) => setTitulo(valor)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción del problema
        </label>
        {/*Input que será reautilizado para la descripción del ticket*/}
        <Input
          placeholder="Detalla lo que sucede"
          onChange={(valor) => setDescripcion(valor)}
        />
      </div>
      <div>
        {/*Boton para enviar, si los campos estan vacios se desabilita*/}
        <Button
          label="Registrar Ticket"
          onClick={() => {}}
          disabled={!titulo.trim() || !descripcion.trim()}
        />
      </div>
    </form>
  );
};
