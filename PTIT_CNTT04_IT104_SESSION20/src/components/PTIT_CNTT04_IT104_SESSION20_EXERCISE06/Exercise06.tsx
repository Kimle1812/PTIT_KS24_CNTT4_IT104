import React, { useEffect, useRef, useState } from "react";

export default function Exercise06() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button onClick={handleOpen}>Mở Modal</button>
      {isOpen && (
        <div>
          <h2>Đăng nhập</h2>
          <input ref={inputRef} type="text" placeholder="Nhập tên người dùng" />
          <button onClick={handleClose}>Đóng</button>
        </div>
      )}
    </div>
  );
}
