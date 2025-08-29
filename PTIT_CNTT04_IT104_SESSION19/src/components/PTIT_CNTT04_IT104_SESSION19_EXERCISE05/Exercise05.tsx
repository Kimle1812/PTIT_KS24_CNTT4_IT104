import React, { useState } from 'react'

export default function Exercise05() {
    const quotes = [
    'Học, học nữa, học mãi.',
    'Thất bại là mẹ thành công.',
    'Không có gì là không thể.',
    'Cuộc sống là một món quà.',
    'Mỗi ngày là một cơ hội.',
    'Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.'
  ];

  const [quote, setQuote] = useState('');
  const RandomQuote = ()=>{
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }
  return (
    <div>
      <h2>Câu nói truyền cảm hứng hôm nay:</h2>
      <i>"{quote}"</i>
      <button onClick={RandomQuote}>Lấy câu nói mới</button>
    </div>
  )
}
