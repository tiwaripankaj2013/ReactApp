import React,{useState,useEffect} from 'react'

const Async = () => {
   const [posts,setPosts] = useState([]);

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>res.json())
      .then((data)=>{setPosts(data)});
   },[])
  return (
    <div>
       <ul>
          {posts.slice(0,10).map((post)=>{
            return( <li className=' mb-1 ' key={post.id}>
                <h3 className=' text-blue-700 text-sm'>{post.title}</h3>
                <p className=' text-gray-700'>{post.body}</p>
             </li>)
          })}
       </ul>
    </div>
  )
}

export default Async