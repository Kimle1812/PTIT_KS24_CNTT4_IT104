import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login account</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your email</label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full bg-blue-600 text-white py-2 rounded-lg text-center font-medium mb-4 cursor-pointer hover:bg-blue-700 transition">
          Login an account
        </div>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
