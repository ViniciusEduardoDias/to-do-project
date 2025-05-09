import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function List({ items, onDeleteItem, onCheckItem }) {
  return (
    <ul className="flex flex-col items px-8 rounded-md gap-3">
      {items.map((item) => (
        <li key={item.id}>
          <div className="w-full bg-white flex justify-between gap-2 items-center rounded-md px-4 py-2">
            <p>{item.text}</p>
            <div className="flex gap-2">
              <button
                className="rounded-full p-1.5 hover:bg-green-700 hover:text-white"
                onClick={() => onCheckItem(item.id)}
              >
                {item.checked ? (
                  <FaCheckCircle className="text-green-600 hover:text-white" />
                ) : (
                  "finalizado?"
                )}
              </button>
              <button
                className="rounded-full p-1.5 hover:bg-red-700 hover:text-white"
                onClick={() => onDeleteItem(item.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;