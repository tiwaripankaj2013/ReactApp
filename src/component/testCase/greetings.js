import React,{useState} from 'react'
import Output from './output';

const Greetings = () => {
   const [content,setContent] = useState(false);
   const contentChangeHandler = ()=>{
      setContent(true);
   }
  return (
    <div>
       <h2>Unit test case learning and practices </h2>
       <p>Hello World</p>
       {!content && <Output>old content </Output>}
       {content && <Output>content change</Output>}
       <button className=' bg-blue-700 text-white px-3 py-1 rounded' onClick={contentChangeHandler}> Change text</button>
    </div>
  )
}

export default Greetings