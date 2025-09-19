import { useDispatch, useSelector } from 'react-redux';

export default function RandomNumber() {
    const result:any = useSelector((data:any) => {
        console.log(data);
        return data.ranDom.arrNumberRandom;
    })

    const dispatch = useDispatch();

    const handleRandom = () => {
        dispatch({ type: "RANDOM" });
    }   

  return (
    <div>
        <h1>EX04</h1>
        <p>[{result.join(",")}]</p>
        <button onClick={handleRandom}>Random</button>
    </div>
  )
}
