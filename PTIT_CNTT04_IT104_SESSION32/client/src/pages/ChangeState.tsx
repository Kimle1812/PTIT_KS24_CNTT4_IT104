
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const result = useSelector((data:any) => {
        return data.change.say
    });
    const dispath = useDispatch()
    const handleClick = () => {
        dispath({type:"SAY"})
    }
  return (
    <div>
        <h1>EX05</h1>
      {result}
      <button onClick={handleClick}>ChangeState</button>
    </div>
  )
}
