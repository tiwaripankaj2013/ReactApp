import React,{useState,useEffect} from 'react'

export const UserDetails = (props) => {
   let {id} = props.match.params;
   const fetchData = async () => {
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await response.json();
        setUser(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    const [user, setUser] = useState();
    useEffect(() => {
      fetchData();
    }, []);
    
   
  return (
    <div>
       <h2>userDetails</h2>
       <p>{user.name}</p>
       <p>{user.email}</p>
   </div>
  )
}
