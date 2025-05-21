import { useState } from "react";
import Input from "./Input";

function ToDoForm({ addItem, onCloseModal }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addItem(text);
    setText("");
    onCloseModal();
  };

  return (
    <div className="p-8 flex flex-col max-w-[900px] m-auto gap-4">
      <h2 className="text-xl">
        Preencha com seu item para adicionar na lista!
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite aqui o seu item"
        />
        <button
          className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
