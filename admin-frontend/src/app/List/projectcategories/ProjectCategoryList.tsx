"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  fetchProjectCategories, 
  handleAdd, 
  handleDelete, 
  handleEditClick, 
  handleUpdate 
} from "@/app/hook/projectCategoryHandlers"; // Import các hàm từ file command
import ProjectCategoryItem from "../../components/Item/project/ProjectCategoryItem"; // Thay tên component nếu cần

export default function ProjectCategoryList() {
  const [projectCategories, setProjectCategories] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    fetchProjectCategories(setProjectCategories);
  }, []);

  return (
    <div className="p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-2xl font-bold mb-4">Danh sách danh mục</h1>

      {/* Form thêm mới */}
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="Nhập tên danh mục"
        />
        <button
          onClick={() => handleAdd(name, setName, () => fetchProjectCategories(setProjectCategories))}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Thêm
        </button>
      </div>

      {/* Form chỉnh sửa */}
      {editId && (
        <div className="mb-4">
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button
            onClick={() => handleUpdate(editId, editName, setEditId, setEditName, () => fetchProjectCategories(setProjectCategories))}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Cập nhật
          </button>
          <button
            onClick={() => setEditId(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          >
            Hủy
          </button>
        </div>
      )}

      {/* Danh sách danh mục */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {projectCategories.map((projectCategory) => (
          <ProjectCategoryItem
            key={projectCategory._id}
            projectCategory={projectCategory} // Đổi designation thành projectCategory
            onDelete={() => handleDelete(projectCategory._id, () => fetchProjectCategories(setProjectCategories))}
            onEdit={() => handleEditClick(projectCategory._id, setEditId, setEditName)}
          />
        ))}
      </div>
    </div>
  );
}
