import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from "gsap/all"
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <>
    <div className='flex-center h-[100vh] '>
      <h2 className='text-3xl  underline text-indigo-500 font-bold uppercase '>Mojito</h2>

    </div>
    
    
    </>
  )
}

export default App