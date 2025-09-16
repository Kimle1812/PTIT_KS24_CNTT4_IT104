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

export default function Exercise05() {
  const getStudentById = async (id: number) => {
    try {
      const response = await axios.get<Student>(`http://localhost:8080/student/${id}`);
      console.log("Thông tin sinh viên:", response.data);
    } catch (error) {
      console.log("Không tìm thấy bản ghi");
    }
  };

  useEffect(() => {
    getStudentById(3);
  }, []);

  return (
    <div>
    </div>
  );
}
