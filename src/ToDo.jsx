import { useState } from "react";
import { Header, ToDoForm, List, Footer } from "./components";

function ToDo() {
  const [items, setItems] = useState([]);

  const AddItem = (text) => {
    const newItem = { id: Date.now(), text };
    setItems([...items, newItem]);
  };

  const onCheckItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const onDeleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-[900px] m-auto">
        <Header />
        <ToDoForm addItem={AddItem} />
        <List
          items={items}
          onCheckItem={onCheckItem}
          onDeleteItem={onDeleteItem}
        />
      </div>
      <Footer />
    </div>
  );
}

export default ToDo;
