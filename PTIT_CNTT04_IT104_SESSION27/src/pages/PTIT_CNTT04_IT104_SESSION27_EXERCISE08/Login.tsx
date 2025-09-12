import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

type Errors = {
  email?: string;
  password?: string;
};

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    const newErrors: Errors = {};
    if (!form.email.trim()) newErrors.email = "Email không được để trống";
    if (!form.password.trim()) newErrors.password = "Mật khẩu không được để trống";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: LoginForm) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      setErrors({ email: "Email hoặc mật khẩu sai" });
      return;
    }

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login account</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-center font-medium mb-4 cursor-pointer hover:bg-blue-700 transition"
        >
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
