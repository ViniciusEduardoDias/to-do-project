import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

function List({ items, onDeleteItem, onCheckItem }) {
  // Ordenar os itens: finalizados primeiro
  const sortedItems = [...items].sort((a, b) =>
    a.checked === b.checked ? 0 : a.checked ? -1 : 1
  );

  return (
    <ul className="flex flex-col px-8 rounded-md gap-3">
      {sortedItems.map((item) => (
        <li key={item.id}>
          <div className="w-full bg-white flex justify-between gap-2 items-center rounded-md px-4 py-2">
            <p
              className={`text-base ${
                item.checked ? "line-through text-gray-400" : ""
              }`}
            >
              {item.text}
            </p>
            <div className="flex gap-2">
              <button
                className="rounded-full p-1.5 hover:bg-green-700 hover:text-white"
                onClick={() => onCheckItem(item.id)}
              >
                {item.checked ? (
                  <FaCheckCircle className="text-green-600 hover:text-white" />
                ) : (
                  "finalizar?"
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
