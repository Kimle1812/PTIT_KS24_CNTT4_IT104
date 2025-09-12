import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gradient-to-b from-purple-600 to-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">My Blog</h1>
          <nav>
            <ul>
              <li className="mb-2">
                <Link
                  to="/blog/posts"
                  className="block px-3 py-2 rounded hover:bg-purple-700"
                >
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <footer className="text-sm opacity-80">© 2025 My Blog</footer>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
