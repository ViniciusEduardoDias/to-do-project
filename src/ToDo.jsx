import { useState } from "react";

import Header from "./Header";
import ToDoForm from "./ToDoForm";
import List from "./List";

function ToDo() {
  const [items, setItems] = useState([]);

  const AddItem = (text) => {
    const newItem = { id: Date.now(), text };
    setItems([...items, newItem]);
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-[900px] m-auto">
        <Header />
        <ToDoForm addItem={AddItem} />
        <List items={items} />
      </div>
    </div>
  );
}

export default ToDo;
