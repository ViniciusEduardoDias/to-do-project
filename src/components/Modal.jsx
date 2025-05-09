function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-white w-[80%] max-w-lg p-6 rounded-xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-gray-600 hover:text-black text-4xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
