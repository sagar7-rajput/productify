import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400">🎵 Producify</h1>
        <p className="mt-4 text-lg text-gray-300">Discover & Hire Top Music Producers from Around the World</p>
      </header>

      <section className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-300">🔥 Featured Producers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 shadow-md">
              <h3 className="text-xl font-bold text-white">Producer Name</h3>
              <p className="text-sm text-gray-400 mt-1">Genre: Trap, Lo-fi, Punjabi</p>
              <p className="text-sm text-gray-400">DAW: FL Studio, Ableton</p>
              <audio controls className="mt-3 w-full">
                <source src="/sample.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Contact</button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">🎯 Why Use Producify?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
