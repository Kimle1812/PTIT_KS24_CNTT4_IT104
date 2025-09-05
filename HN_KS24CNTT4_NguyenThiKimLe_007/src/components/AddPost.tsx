import { X } from 'lucide-react'
import React, { useState } from 'react'

interface AddPostProps {
  onClose: () => void;
  onAdd: (post: { title: string; content: string }) => void;
}

export default function AddPost({ onClose, onAdd }: AddPostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const handleSubmit = () => {
    const newErrors: { title?: string; content?: string } = {};

    if (!title.trim()) {
      newErrors.title = "Vui lòng nhập tiêu đề!";
    }
    if (!content.trim()) {
      newErrors.content = "Vui lòng nhập nội dung!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({ title, content });
    setTitle("");
    setContent("");
    setErrors({});
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="w-96 h-auto bg-white rounded-xl shadow-lg p-4">
        <div className="flex justify-between items-center">
          <p className="text-xl font-normal">Bài viết của bạn</p>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col gap-2">
          <label>
            Tiêu đề <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

          <label>
            Nội dung <span className="text-red-500">*</span>
          </label>
          <textarea
            className="border p-2 rounded"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
        </div>
        <hr className="my-2" />
        <div className="flex justify-end gap-3">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Đăng
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
