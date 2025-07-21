'use client';

import { useState } from 'react';
import Image from 'next/image';

const mockStocks = [
  {
    id: 1,
    name: 'Apple',
    symbol: 'AAPL',
    price: 165.12,
    change: 1.56,
    imageUrl: 'https://logo.clearbit.com/apple.com',
  },
  {
    id: 2,
    name: 'Microsoft',
    symbol: 'MSFT',
    price: 320.15,
    change: 3.45,
    imageUrl: 'https://logo.clearbit.com/microsoft.com',
  },
  {
    id: 3,
    name: 'Amazon',
    symbol: 'AMZN',
    price: 125.72,
    change: 2.18,
    imageUrl: 'https://logo.clearbit.com/amazon.com',
  },
  {
    id: 4,
    name: 'Alphabet',
    symbol: 'GOOGL',
    price: 138.55,
    change: 1.98,
    imageUrl: 'https://logo.clearbit.com/abc.xyz',
  },
  {
    id: 5,
    name: 'Tesla',
    symbol: 'TSLA',
    price: 182.63,
    change: 4.32,
    imageUrl: 'https://logo.clearbit.com/tesla.com',
  },
  {
    id: 6,
    name: 'NVIDIA',
    symbol: 'NVDA',
    price: 435.89,
    change: 3.1,
    imageUrl: 'https://logo.clearbit.com/nvidia.com',
  },
  {
    id: 7,
    name: 'Meta',
    symbol: 'META',
    price: 276.92,
    change: 2.64,
    imageUrl: 'https://logo.clearbit.com/meta.com',
  },
  {
    id: 8,
    name: 'Netflix',
    symbol: 'NFLX',
    price: 412.35,
    change: -1.42,
    imageUrl: 'https://logo.clearbit.com/netflix.com',
  },
  {
    id: 9,
    name: 'Intel',
    symbol: 'INTC',
    price: 34.15,
    change: 0.67,
    imageUrl: 'https://logo.clearbit.com/intel.com',
  },
  {
    id: 10,
    name: 'Adobe',
    symbol: 'ADBE',
    price: 512.44,
    change: 3.77,
    imageUrl: 'https://logo.clearbit.com/adobe.com',
  },
];

const ITEMS_PER_PAGE = 5;

export default function StocksTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockStocks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStocks = mockStocks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-[#230E61] p-6 rounded-xl shadow-lg text-white w-full max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Stocks Overview</h2>
      </header>

      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-purple-300 text-sm border-b border-purple-600">
            <th className="pb-2">Company</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Change</th>
            <th className="pb-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentStocks.map((stock) => (
            <tr
              key={stock.id}
              className="border-b border-purple-800 last:border-0 hover:bg-[#311878]/40 transition"
            >
              <td className="py-3 flex items-center gap-3 font-medium">
                <Image
                  src={stock.imageUrl}
                  alt={stock.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {stock.name}
              </td>
              <td className="text-lg font-semibold">
                ${stock.price.toFixed(2).replace('.', ',')}
              </td>
              <td
                className={`text-lg font-semibold ${
                  stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {stock.change >= 0 ? '+' : ''}
                {stock.change.toFixed(2)}
              </td>
              <td className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-md text-sm font-bold">
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-full text-sm font-bold focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors ${
              currentPage === i + 1
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900 text-purple-300 hover:bg-purple-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </footer>
    </section>
  );
}
