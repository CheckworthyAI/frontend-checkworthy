import React from 'react';

export default function FoundationsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE8F5] to-[#3D52A0] flex flex-col items-center text-center text-[#3D3D3D] px-4 py-12 font-sans">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-6xl font-black tracking-tight text-[#1A1A1A]">FOUNDATIONS</h1>
        <p className="mt-4 text-[#3D52A0] text-lg max-w-xl mx-auto">
          Elevate your commerce business with 100+ foundational product updates from Shopify
        </p>
      </header>

      {/* 3D Block Showcase */}
      <div className="grid grid-cols-4 gap-6 relative max-w-6xl w-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#ADBBDa] to-[#7091E6] shadow-xl rounded-lg p-4 h-48 flex items-center justify-center text-white text-xl font-semibold"
            style={{ transform: `translateY(${(i % 2) * 20}px)` }}
          >
            Block {i + 1}
          </div>
        ))}

      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <button className="bg-[#3D52A0] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#2A3E78] transition">
          Start free trial
        </button>
      </div>
    </div>
  );
}
