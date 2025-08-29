import React, { useState } from "react";

export default function Exercise04() {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") {
      setError({ ...error, [name]: `${name} khong duoc bo trong` });
    } else if (name === "email" && value != "") {
      if (value.includes("@") && value.indexOf("@") != 0) {
        setError({ ...error, email: "" });
      } else {
        setError({ ...error, email: `Email khong dung dinh dang` });
      }
    } else {
      setError({ ...error, [name]: "" });
    }
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nhap ho ten"
          name="name"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.name}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="example@gmail.com"
          name="email"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.email}</p>
      </div>
      <button>Save</button>
    </div>
  );
}
