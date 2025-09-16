import { useEffect, useState } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function Exercise02() {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProduct = async () => {
    const response = await fetch("http://localhost:8080/product");
    const data: Product[] = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.product_name} width={100} />
            <p>{p.product_name}</p>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <p>Số lượng: {p.quantity}</p>
            <p>Ngày thêm: {new Date(p.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
