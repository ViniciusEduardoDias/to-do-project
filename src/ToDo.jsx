import { useEffect, useState } from "react";
import { Modal, ToDoForm, List, Footer } from "./components";

function ToDo() {
  const SAVED_ITEMS = "savedItems";
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    return savedItems || [];
  });

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

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
            className="w-10 h-10 flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 rounded-full text-xl font-bold"
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
