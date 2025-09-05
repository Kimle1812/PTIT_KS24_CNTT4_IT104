import React, { useState } from "react";

interface Student {
  id: number;
  code: string;
  name: string;
  age: number;
  gender: string;
  birthday: string;
  birthplace: string;
  address: string;
}

export default function Hackathon02() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      code: "SV001",
      name: "Nguyễn Văn A",
      age: 20,
      gender: "Nam",
      birthday: "2004-01-01",
      birthplace: "Hà Nội",
      address: "Hà Nội",
    },
    {
      id: 2,
      code: "SV002",
      name: "Nguyễn Văn B",
      age: 21,
      gender: "Nữ",
      birthday: "2003-02-15",
      birthplace: "Hải Phòng",
      address: "Hải Phòng",
    },
    {
      id: 3,
      code: "SV003",
      name: "Nguyễn Văn C",
      age: 19,
      gender: "Nam",
      birthday: "2005-03-20",
      birthplace: "Đà Nẵng",
      address: "Đà Nẵng",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    age: "",
    gender: "Nam",
    birthday: "",
    birthplace: "Hà Nội",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent: Student = {
      id: students.length + 1,
      code: formData.code,
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      birthday: formData.birthday,
      birthplace: formData.birthplace,
      address: formData.address,
    };
    setStudents([...students, newStudent]);
    setFormData({
      code: "",
      name: "",
      age: "",
      gender: "Nam",
      birthday: "",
      birthplace: "Hà Nội",
      address: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Thêm mới sinh viên
        </button>
        <input
          type="text"
          placeholder="Search Here"
          className="border px-3 py-2 rounded w-64"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Tìm kiếm
        </button>
        <button className="border px-4 py-2 rounded">Sắp xếp</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Danh Sách Sinh Viên</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Mã sinh viên</th>
            <th className="border px-3 py-2">Tên sinh viên</th>
            <th className="border px-3 py-2">Tuổi</th>
            <th className="border px-3 py-2">Giới tính</th>
            <th className="border px-3 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id}>
              <td className="border px-3 py-2">{index + 1}</td>
              <td className="border px-3 py-2">{s.code}</td>
              <td className="border px-3 py-2">{s.name}</td>
              <td className="border px-3 py-2">{s.age}</td>
              <td className="border px-3 py-2">{s.gender}</td>
              <td className="border px-3 py-2">
                <div className="flex gap-2">
                  <button className="bg-red-400 text-white px-3 py-1 rounded">
                    Xem
                  </button>
                  <button className="bg-yellow-400 text-white px-3 py-1 rounded">
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="bg-teal-500 text-white px-3 py-1 rounded"
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Thông Tin Sinh Viên</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Mã sinh viên</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Tên sinh viên</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Tuổi</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Giới tính</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block mb-1">Ngày sinh</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Nơi sinh</label>
                <input
                  type="text"
                  name="birthplace"
                  value={formData.birthplace}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block mb-1">Địa chỉ</label>
                <select
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">-- Chọn địa chỉ --</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                </select>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
