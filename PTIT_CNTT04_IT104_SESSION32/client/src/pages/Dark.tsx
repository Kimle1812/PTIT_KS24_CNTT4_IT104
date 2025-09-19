import { useDispatch, useSelector } from 'react-redux'

export default function Dark() {
    const result = useSelector((data:any) => {
        return data.dark.check
    })
    const dispath = useDispatch();
    const handleChange = () => {
        dispath({type:"DARK"})
    }
  return (
    <>
    <h1>EX06</h1>
     <div style={{
        width:"400px",
        height:"200px",
        border:"1px solid black",
        backgroundColor:result== true ? "white" : "black",
        color:result== true ? "black" : "white",
     }}>
        <input type="checkbox" onChange={handleChange} checked={result === false } /> 
        <label htmlFor="">{result === true ? "sang" : "toi"}</label>    
     </div> 
    </>
  )
}
