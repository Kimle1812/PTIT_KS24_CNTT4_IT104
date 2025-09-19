import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const result:any = useSelector((data :any)=>{
        console.log("data: ", data);
        return data.counter;
    })
    const dispatch = useDispatch();
    const increase = () => {
        dispatch({
            type:"INCREAMENT"
        })
    }
    const decrease=()=>{
        dispatch({
            type:"DECREASE"
        })
    }
  return (
    <div>
      <h1>ỨNG DỤNG COUNTER!</h1>
      <p>Giá trị counter: {result.count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  )
}
