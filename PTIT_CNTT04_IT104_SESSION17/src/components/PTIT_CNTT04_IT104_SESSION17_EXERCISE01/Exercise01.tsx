import React ,{useState} from 'react'

export default function Exercise01() {
  const [name] = useState<string>("Nguyen Van A");
  return (
    <div>
      <div>Ho va ten: {name}</div>
    </div>
  );
}
