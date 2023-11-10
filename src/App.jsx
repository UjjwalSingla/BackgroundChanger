import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [len, setlen] = useState(8)
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setPass] = useState()

  function copy(){
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass)
  }
  const PassGeneratorsss =  useCallback(()=>{
  let pass= ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (num) str += "0123456789"
  if (char) str += "`~!@#$%^&*()_-+={}[]|\:;'<>,.?/"
  for (let index = 1; index < len; index++) {
    pass += str[Math.floor(Math.random()*str.length+1)]
    
  }
  
  setPass(pass)
},[len,num,char,setPass])
useEffect(()=>{PassGeneratorsss()},[len,num,char,PassGeneratorsss])
const passRef = useRef(null);
  return (
    <>
    <div className='w-full max-w-md mx-auto bg-gray-800 rounded-lg shadow-md text-white px-4 py-3 my-10'  > 
    <h1 className='text-center my-3'>Password Generator</h1>
    
    <div className="flex shadow rounded-md overflow-hidden mb-4">
      <input type="text" value={pass} className="outline-none w-full py-1 px-3 text-black" placeholder="password" readOnly={true} ref={passRef} />
      <button onClick={copy} className='bg-blue-400 px-5 py-3 mx-2 rounded-md'>Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <input type="range" value={len} className="cursor-pointer" min="8" max="50"  onChange={(e)=>setlen(e.target.value)}/>
      <label>length:{len}</label>
      <input type="checkbox" value={num} onChange={(e)=>setnum((prev)=>!prev)} />
      <label className='p-0 ' >Number</label>
      <input type="checkbox" value={char} onChange={(e)=>setchar((prev)=>!prev)} />
      <label>Character</label>
    </div>
    </div>

    </>
  )
}

export default App
