import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
  confirm: string;
};

type Errors = {
  email?: string;
  password?: string;
  confirm?: string;
};

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validateField = (
    name: keyof FormData,
    value: string,
    currentForm: FormData = form
  ): string => {
    if (name === "email") {
      if (!value.trim()) return "Email không được để trống";
      if (!/\S+@\S+\.\S+/.test(value)) return "Email không hợp lệ";
    }
    if (name === "password") {
      if (!value.trim()) return "Mật khẩu không được để trống";
      if (value.length < 6) return "Mật khẩu phải từ 6 ký tự";
    }
    if (name === "confirm") {
      if (!value.trim()) return "Vui lòng nhập lại mật khẩu";
      if (value !== currentForm.password) return "Mật khẩu không khớp";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    const msg = validateField(name as keyof FormData, value, updatedForm);
    setErrors({ ...errors, [name]: msg });
  };

  const handleRegister = () => {
    const newErrors: Errors = {};
    (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
      const msg = validateField(key, form[key]);
      if (msg) newErrors[key] = msg;
    });

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: { email: string }) => u.email === form.email)) {
      newErrors.email = "Email đã tồn tại";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    users.push({ email: form.email, password: form.password });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Create account</h2>

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

        <div className="mb-4">
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

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Confirm password</label>
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirm && <p className="text-red-500 text-sm">{errors.confirm}</p>}
        </div>

        <div
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-center font-medium mb-4 cursor-pointer hover:bg-blue-700 transition"
        >
          Create an account
        </div>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
