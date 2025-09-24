import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/slices/counterSlice';

export default function Counter() {
  const result = useSelector((data: any) => data.counter.value);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increment());
  };
  const decrease = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h2>Count: {result}</h2>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
