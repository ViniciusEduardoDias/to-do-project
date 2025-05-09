import { useState } from "react";
import { Modal, ToDoForm, List, Footer } from "./components";

function ToDo() {
  const [showModal, setShowModal] = useState(false);
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
        <header className="flex p-6 justify-between items-center font-bold">
          <h1 className="text-5xl">To Do List</h1>
          <button
            className="text-lg px-4 py-2 font-semibold bg-blue-500 text-white hover:bg-blue-600 rounded-full"
            onClick={() => setShowModal(true)}
          >
            +
          </button>
        </header>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ToDoForm addItem={AddItem} />
          </Modal>
        )}
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
