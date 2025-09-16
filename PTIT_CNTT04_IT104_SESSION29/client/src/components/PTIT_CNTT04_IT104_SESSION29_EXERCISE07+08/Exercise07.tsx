import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, X } from "lucide-react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Exercise07() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  async function getAllStudents() {
    try {
      const response = await axios.get<Student[]>(
        "http://localhost:8080/student"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sinh viên:", error);
    }
  }

  async function deleteStudent(id: number) {
    try {
      await axios.delete(`http://localhost:8080/student/${id}`);
      setStudents(students.filter((s) => s.id !== id)); // render lại
      setShowModal(false);
    } catch (error) {
      console.error("Lỗi khi xoá sinh viên:", error);
    }
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto mt-10 border rounded shadow bg-white">
        <div className="flex justify-between items-center bg-blue-900 text-white px-4 py-3 rounded-t">
          <h2 className="text-lg font-semibold">
            Quản lý <span className="font-bold">sinh viên</span>
          </h2>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            + Thêm mới sinh viên
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">Tên sinh viên</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Địa chỉ</th>
              <th className="px-4 py-2">Số điện thoại</th>
              <th className="px-4 py-2">Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2">{student.student_name}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.address}</td>
                <td className="px-4 py-2">{student.phone}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <Pencil size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                      setSelectedStudent(student);
                      setShowModal(true);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-100">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <X size={18} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Xóa sinh viên</h3>
            <p className="mb-6">
              Bạn chắc chắn muốn xoá sinh viên{" "}
              <span className="font-bold">{selectedStudent.student_name}</span>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteStudent(selectedStudent.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
