'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block my-10 px-6 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 transition-colors"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
