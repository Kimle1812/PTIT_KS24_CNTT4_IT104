import React from 'react'
import Exercise01 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE01/Exercise01'
import Exercise02 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE02/Exercise02'
import Exercise03 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE03/Exercise03'
import Exercise04 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE04/Exercise04'
import Exercise05 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE05/Exercise05'
import Exercise06 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE06/Exercise06'
import Exercise07 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE07/Exercise07'
import Exercise08 from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE08/Exercise08'
import TodoList from './components/PTIT_CNTT04_IT104_SESSION17_EXERCISE09/TodoList'

export default function App() {
  return (
    <div>
      {/* Bài 1 */}
      <Exercise01></Exercise01>
      {/* Bài 2 */}
      <Exercise02></Exercise02>
      {/* Bài 3 */}
      <Exercise03></Exercise03>
      {/* Bài 4 */}
      <Exercise04></Exercise04>
      {/* Bài 5 */}
      <Exercise05></Exercise05>
      {/* Bài  6*/}
      <Exercise06></Exercise06>
      {/* Bài 7 */}
      <Exercise07></Exercise07>
      {/* Bài 8 */}
      <Exercise08></Exercise08>
      {/* Bài 9 - 10*/}
      <TodoList></TodoList>
    </div>
  )
}
