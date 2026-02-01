import { useRef, useState } from "react";

function App() {
  
  const [time,setTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning,setRunning] = useState(false);

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  function start(){
    if(!isRunning){
      intervalRef.current = setInterval(() => {
        setTime((prevtime) => {return prevtime+1});
      },1000)
      setRunning(true);
    }
  }

  function stop(){
    if(isRunning){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRunning(false);
    }
  }
  
  function reset(){
    if(isRunning){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRunning(false);
      setTime(0);
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center">
      
      {/* 2. The Card: White, rounded, with shadow */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-[400px] flex flex-col items-center gap-8">
        
        {/* 3. The Display: Monospace font, large text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-gray-500 font-bold tracking-widest uppercase text-sm">Stopwatch</h2>
          <h1 className="text-6xl font-mono font-bold text-slate-800">
            {formatTime(time)}
          </h1>
        </div>

        {/* 4. The Controls: Row layout, semantic colors */}
        <div className="flex gap-4 w-full">
          <button 
            onClick={start}
            className="flex-1 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-transform active:scale-95 shadow-md"
          >
            Start
          </button>
          
          <button 
            onClick={stop}
            className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-transform active:scale-95 shadow-md"
          >
            Stop
          </button>
          
          <button 
            onClick={reset}
            className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-transform active:scale-95"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default App


  // let [time,setTime] = useState(0);

  // function start(){
  //   setInterval(() => {
  //     time = time + 1;
  //     setTime(time);
  //   },1000)
  // }
