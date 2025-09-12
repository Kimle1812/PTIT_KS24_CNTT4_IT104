import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29000000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26000000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 23000000,
    description: "Laptop nhẹ nhàng với chip M2 mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 21000000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 19000000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const searchValue = searchParams.get("search") || "";
    setKeyword(searchValue);
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchParams({ search: keyword });
      navigate(`/products?search=${encodeURIComponent(keyword)}`);
    } else {
      setSearchParams({});
      navigate(`/products`);
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Nhập từ khóa..."
          className="border p-2 rounded w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="border p-2 rounded">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.description}</p>
            <p className="text-red-500">{p.price.toLocaleString()} VND</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
