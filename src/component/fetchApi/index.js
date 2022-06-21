import React,{useEffect,useState} from 'react';

const FetchApi = () => {
   const [userData,setUserData] = useState([]);

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json())
      .then((data)=>{setUserData(data)});
   },[])
   const deleteUser =  ()=> {
      // const oldData = [...userData];
      setUserData([])
   }
  return (
    <div style={{maxWidth:'800px',margin:'auto'}}>
      <ul>
      {
         userData.length> 0 ? userData.map((user)=>{
            return <li style={{margin:'20px',color:'#666',listStyle:'none',textAlign:'left'}} key={user.id}>
               <p>Name: {user.name}</p>
               <p>userName: {user.username}</p>
              
            </li>
         }) :'Loading'
      }
</ul>
   <button onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default FetchApi