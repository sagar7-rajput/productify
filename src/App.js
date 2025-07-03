
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">🎵 Hire Music Producers</h1>
        <p className="mb-6 text-gray-700 text-center">
          Discover and connect with top music producers. Whether you're an artist or a music creator,
          find your sound partner here.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">🎧 John Beats</h2>
            <p className="text-sm text-gray-600">Hip-Hop | Trap | EDM</p>
            <p className="text-sm text-gray-500 mt-1">10+ years experience. Based in LA.</p>
          </div>
          <div className="p-4 border rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">🎼 Emily Harmony</h2>
            <p className="text-sm text-gray-600">Pop | Indie | Acoustic</p>
            <p className="text-sm text-gray-500 mt-1">Award-winning producer. Works remotely.</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            Join as Producer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
