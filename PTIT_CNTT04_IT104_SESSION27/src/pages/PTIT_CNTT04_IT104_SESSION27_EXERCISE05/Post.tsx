import React from "react";
import { Link } from "react-router-dom";

export const posts = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
    content:
      "React là thư viện JavaScript phổ biến dùng để xây dựng giao diện người dùng. Nó giúp việc phát triển ứng dụng trở nên nhanh chóng và hiệu quả hơn. Với React, bạn có thể tạo ra các component tái sử dụng và quản lý state một cách rõ ràng. Đây là bước khởi đầu tuyệt vời cho bất kỳ ai muốn tìm hiểu về frontend development.",
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
    content:
      "TailwindCSS là framework CSS tiện lợi cho phép bạn sử dụng các utility class để tạo giao diện. Thay vì viết CSS thủ công, bạn chỉ cần kết hợp các class có sẵn. Điều này giúp code frontend ngắn gọn, dễ đọc và dễ duy trì. Tailwind đặc biệt phù hợp cho những dự án React, Vue, Angular.",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Giúp điều hướng trong React một cách đơn giản...",
    content:
      "React Router là thư viện giúp điều hướng trong ứng dụng React SPA. Thay vì tải lại toàn bộ trang, React Router thay đổi component hiển thị dựa trên URL. Nó hỗ trợ nested routes, dynamic params và nhiều tính năng khác. Đây là công cụ không thể thiếu trong mọi dự án React thực tế.",
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
    content:
      "Redux là thư viện giúp quản lý state cho ứng dụng lớn. Thay vì truyền props qua nhiều component, Redux cung cấp store tập trung. Mọi component có thể truy cập hoặc cập nhật state thông qua actions và reducers. Redux đặc biệt hữu ích trong các dự án có luồng dữ liệu phức tạp.",
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
    content:
      "Hooks là tính năng mạnh mẽ trong React, cho phép bạn dùng state và lifecycle trong function component. useState dùng để quản lý state cục bộ, useEffect xử lý side effect, và còn nhiều hook khác như useContext, useReducer. Việc nắm vững hooks sẽ giúp bạn viết code React hiện đại và tối ưu hơn.",
  },
];

export default function Posts() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Danh sách bài viết</h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="border rounded p-3 hover:shadow">
            <Link
              to={`/blog/posts/${post.id}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
