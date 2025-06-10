const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white mx-auto max-w-[80%] p-6 rounded shadow-lg w-full overflow-auto max-h-screen relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 w-8 h-8 flex items-center justify-center text-lg transition duration-200"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
