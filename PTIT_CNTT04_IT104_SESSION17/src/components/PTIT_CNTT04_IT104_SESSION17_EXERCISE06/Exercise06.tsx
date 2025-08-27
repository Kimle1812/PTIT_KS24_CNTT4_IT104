
import React, { useState } from 'react'

export default function Exercise06() {
    const [text, setText]=useState<string>("")
  return (
    <div>
      <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
      <p>So ky tu: {text.length}</p>
    </div>
  )
}
