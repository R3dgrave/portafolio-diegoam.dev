// src/Components/CodeHighlight.jsx
const CodeHighlight = ({ children }) => {
  return (
    <span className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white px-1 py-0.5 rounded-full text-sm mx-1">
      {children}
    </span>
  );
};

export default CodeHighlight;