function List({ items }) {
  return (
    <ul className="flex flex-col px-10 gap-3">
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
