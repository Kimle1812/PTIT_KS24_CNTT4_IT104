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

export default function Exercise03() {
  async function getAllStudent() {
    try {
      const response = await axios.get<Student[]>("http://localhost:8080/student");
      console.log("Danh sách sinh viên:", response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  }

  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
    </div>
  );
}