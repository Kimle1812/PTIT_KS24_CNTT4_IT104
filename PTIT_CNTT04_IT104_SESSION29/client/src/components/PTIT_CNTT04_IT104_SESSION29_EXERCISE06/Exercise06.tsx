import { useEffect } from "react";
import axios from "axios";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Exercise06() {
  async function createStudent() {
    const newStudent: Student = {
      id: Math.floor(Math.random() * 10000),
      student_name: "Nguyen Van A",
      email: "vana@example.com",
      address: "Ha Noi",
      phone: "0987654321",
      status: true,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await axios.post<Student>(
        "http://localhost:8080/student",
        newStudent
      );
      console.log("Kết quả thêm mới:", response.data);
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  }

  useEffect(() => {
    createStudent();
  }, []);

  return (
    <div>
      <h2>Thêm mới sinh viên</h2>
    </div>
  );
}
