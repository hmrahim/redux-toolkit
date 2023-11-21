import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByvalue, increment, reset } from "./app/features/counter/counterSlice";

function App() {
  const counter= useSelector((state) => state);

 
  const dispatch = useDispatch()

  

  return (
    <>
      <div className="w-96 mx-auto bg-blue-500 flex flex-col gap-5 justify-center items-center p-5">
        <h1>count:{counter.counter.count}</h1>
        <div className="text-white flex gap-5 justify-center">
          <button onClick={()=> {dispatch(increment())}} className="bg-black p-1  rounded-md">increment</button>
          <button onClick={()=> dispatch(decrement())} className="bg-black p-1  rounded-md">decrement</button>
          <button onClick={()=> dispatch(reset())} className="bg-black p-1  rounded-md">reset</button>
          <button onClick={()=> dispatch(increaseByvalue(5))} className="bg-black p-1  rounded-md">incre-5</button>
        </div>
      </div>
    </>
  );
}

export default App;
