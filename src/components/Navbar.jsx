import React from 'react';

function Navbar({ onDownload }) {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">QuickDown</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onDownload}
      >
        Download PDF
      </button>
    </nav>
  );
}

export default Navbar;
