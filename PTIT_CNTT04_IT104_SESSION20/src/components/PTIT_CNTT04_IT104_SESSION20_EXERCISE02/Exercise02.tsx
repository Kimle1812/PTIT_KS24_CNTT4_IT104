import React, { useState } from 'react'

export default function Exercise02() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "username") {
        setName(value);
        } else if (name === "useremail") {
        setEmail(value);
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Thông tin người dùng</h2>
        <input type="text" name="username" placeholder="Nhập tên" value={name} onChange={handleChange}/>
        <br />
        <input type="email" name="useremail" placeholder="Nhập email" value={email} onChange={handleChange}/>
        <br />
        <button type="submit">Gửi</button>
      </form>

      {submitted && (
        <div>
          <p><strong>Tên:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </div>
  );
}