import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

const [result, setResult] = useState("")
const [prompt, setPrompt] = useState("")
  console.log(import.meta.env.VITE_OPEN_AI_KEY)
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
 
  const res =  await openai.createImage({
    
      prompt: prompt,
      n:1,
      size:"1024x1024"
    });
            setResult(res.data.data[0].url)
  }
  return (
    <div className=" rounded-xl flex justify-center items-center h-screen flex-col  bg-green-300">
      <h1 className=' texl-3xl text-green-200 bg-pink-400'>CCVTBUG remember the COLOR combination</h1>
      <div className=' rounded-xl' >
      <input className=' bg-gradient-to-tr from-slate-400 to-slate-100' onChange={(e) => setPrompt(e.target.value)} />
      </div>

      <button className=' bg-pink-400 border rounded-lg text-xl text-white ' onClick={generateImage
      }>gerenate image</button>

    <img className=' bottom-2 border-purple-300  w-96 bg-slate-600' src={result} alt=""/>
      
           </div>
  )
}

export default App
