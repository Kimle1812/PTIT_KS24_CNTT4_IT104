import React, { useEffect, useState } from "react";
import axios from "axios";

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export default function Exercise() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>("");
  const [taskInput, setTaskInput] = useState<string>(""); // tên công việc nhập vào
  const [filterStatus, setFilterStatus] = useState<string>("all"); // all | completed | notCompleted
  const [editingTaskId, setEditingTaskId] = useState<number>(-1); // id công việc đang sửa

  // Lọc công việc theo trạng thái
  const filteredTasks = tasks.filter((task) =>
    filterStatus === "all"
      ? true
      : filterStatus === "completed"
      ? task.isCompleted
      : !task.isCompleted
  );

  // Lấy danh sách công việc
  async function fetchTasks() {
    try {
      const res = await axios.get("http://localhost:8080/tasks");
      setTasks(res.data);
    } catch {
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  // Thêm hoặc cập nhật công việc
  async function handleSaveTask() {
    if (taskInput.trim() === "") {
      setError("Không được để trống tên công việc");
      return;
    }
    if (
      tasks.some(
        (task) =>
          task.name.trim().toLowerCase() === taskInput.trim().toLowerCase() &&
          task.id !== editingTaskId
      )
    ) {
      setError("Công việc đã tồn tại");
      return;
    }

    if (editingTaskId === -1) {
      // thêm mới
      const res = await axios.post("http://localhost:8080/tasks", {
        name: taskInput,
        isCompleted: false,
      });
      setTasks([...tasks, res.data]);
    } else {
      // cập nhật
      setTasks(
        tasks.map((task) =>
          task.id === editingTaskId ? { ...task, name: taskInput } : task
        )
      );
      await axios.patch(`http://localhost:8080/tasks/${editingTaskId}`, {
        name: taskInput,
      });
    }
    setTaskInput("");
    setError("");
    setEditingTaskId(-1);
  }

  // Đánh dấu hoàn thành / chưa hoàn thành
  function toggleTask(id: number) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const updated = { ...task, isCompleted: !task.isCompleted };

    setTasks(tasks.map((t) => (t.id === id ? updated : t)));

    axios.patch(`http://localhost:8080/tasks/${id}`, {
      isCompleted: updated.isCompleted,
    });
  }

  // Xóa 1 công việc
  async function deleteTask(id: number) {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    }
  }

  // Xóa công việc đã hoàn thành
  async function deleteCompletedTasks() {
    if (confirm("Xóa tất cả công việc đã hoàn thành?")) {
      const completed = tasks.filter((t) => t.isCompleted);
      await Promise.all(
        completed.map((t) =>
          axios.delete(`http://localhost:8080/tasks/${t.id}`)
        )
      );
      setTasks(tasks.filter((t) => !t.isCompleted));
    }
  }

  // Xóa tất cả công việc
  async function deleteAllTasks() {
    if (confirm("Xóa tất cả công việc?")) {
      await Promise.all(tasks.map((t) => axios.delete(`http://localhost:8080/tasks/${t.id}`)));
      setTasks([]);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[420px] rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">Quản lý công việc</h2>

        {/* Form thêm/sửa */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2 mb-4"
        >
          <input
            onChange={(e) => {
              setTaskInput(e.target.value);
              setError("");
            }}
            type="text"
            placeholder="Nhập tên công việc"
            value={taskInput}
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleSaveTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {editingTaskId === -1 ? "Thêm công việc" : "Cập nhật công việc"}
          </button>
        </form>

        {/* Bộ lọc */}
        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1 rounded-lg ${
              filterStatus === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilterStatus("completed")}
            className={`px-3 py-1 rounded-lg ${
              filterStatus === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Hoàn thành
          </button>
          <button
            onClick={() => setFilterStatus("notCompleted")}
            className={`px-3 py-1 rounded-lg ${
              filterStatus === "notCompleted"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Đang thực hiện
          </button>
        </div>

        {/* Danh sách công việc */}
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {loading ? (
            <p className="text-center">Đang tải...</p>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span
                    className={`${
                      task.isCompleted ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.name}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingTaskId(task.id);
                      setTaskInput(task.name);
                    }}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    ✏
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Xóa */}
        <div className="flex justify-between mt-4">
          <button
            onClick={deleteCompletedTasks}
            className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-500"
          >
            Xóa công việc hoàn thành
          </button>
          <button
            onClick={deleteAllTasks}
            className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
          >
            Xóa tất cả
          </button>
        </div>
      </div>
    </div>
  );
}
