
import React, { useState } from "react";

type Warehouse = {
  id: number;
  name: string;
  address: string;
  status: string;
};
let id1=1;
export default function Hackathon06() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>(() => {
    const warehouseLocal = localStorage.getItem("warehouses");
    return warehouseLocal ? JSON.parse(warehouseLocal) : [];
  });

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("active");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address) return;

    if (editingId) {
    
      const updatedWarehouses = warehouses.map((w) =>
        w.id === editingId ? { ...w, name, address, status } : w
      );
      setWarehouses(updatedWarehouses);
      localStorage.setItem("warehouses", JSON.stringify(updatedWarehouses));
      setEditingId(null);
    } else {
    
      const newWarehouse: Warehouse = {
        id: id1++,
        name,
        address,
        status,
      };
      const warehouseClones = [...warehouses, newWarehouse];
      setWarehouses(warehouseClones);
      localStorage.setItem("warehouses", JSON.stringify(warehouseClones));
    }

    setName("");
    setAddress("");
    setStatus("active");
  };

  
  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá kho này?")) {
      const warehouseDele = warehouses.filter((i) => i.id !== id);
      setWarehouses(warehouseDele);
      localStorage.setItem("warehouses", JSON.stringify(warehouseDele));
    }
  };

  
  const handleEdit = (w: Warehouse) => {
    setEditingId(w.id);
    setName(w.name);
    setAddress(w.address);
    setStatus(w.status);
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center">
  
      <div className="mt-7 bg-cyan-600 w-[800px] h-[100px] text-white text-[30px] text-center flex items-center justify-center rounded-[8px]">
        <h1>Quản Lý Kho</h1>
      </div>

      
      <div className="bg-white w-[800px] mt-5 p-4 rounded shadow">
        <p className="mb-2 font-semibold">
          {editingId ? " Sửa kho" : "+ Thêm kho mới"}
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Tên kho"
            className="border p-1 flex-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            className="border p-1 flex-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <select
            className="border p-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngưng hoạt động</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 px-4 text-white rounded"
          >
            {editingId ? "Cập nhật" : "Thêm"}
          </button>
          {editingId && (
            <button
              type="button"
              className="bg-gray-500 px-4 text-white rounded"
              onClick={() => {
                setEditingId(null);
                setName("");
                setAddress("");
                setStatus("active");
              }}
            >
              Hủy
            </button>
          )}
        </form>
      </div>

      
      <div className="bg-white w-[800px] mt-5 p-4 rounded shadow">
        <p className="mb-2 font-semibold">Danh sách kho</p>
        <table className="w-full border-collapse border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Tên kho</th>
              <th className="border p-2">Địa chỉ</th>
              <th className="border p-2">Trạng thái</th>
              <th className="border p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((w) => (
              <tr key={w.id} className="text-center">
                <td className="border p-2 ">
                  {w.name}
                </td>
                <td className="border p-2">{w.address}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      w.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {w.status === "active" ? "Hoạt động" : "Ngưng hoạt động"}
                  </span>
                </td>
                <td className="border p-2 flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(w)}
                    className="bg-cyan-500 text-white px-3 py-1 rounded"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(w.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
            {warehouses.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center p-3 text-gray-500">
                  Chưa có kho nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
