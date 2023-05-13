import { useState } from 'react';

export default function JsonDisplay({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-white border border-gray-300 rounded-lg shadow-sm p-4 max-h-80 overflow-y-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Show more
        </button>
      )}
    </div>
  );
}
