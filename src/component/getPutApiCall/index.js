import React, { useState, useEffect } from 'react';
import UserList from './UserList';

function GetPutApi(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
   try {
     let response = await fetch("https://jsonplaceholder.typicode.com/users");
     let data = await response.json();
     setUsers(data);
     return data;
   } catch (error) {
     return error;
   }
 };
 
 useEffect(() => {
   fetchData();
 }, []);


  
  const handleEditUser = (userId) => {
    props.history.push(`/users/${userId}`);
  }

  return(
    <div>
      {
        (isLoading)
        ?
        <div>Loading...</div>
        :
        null
      }
      <UserList users={users} handlePagination={handlePagination} handleDelete={handleDelete} handleEditUser={handleEditUser} />
    </div>
  )
}

export default GetPutApi;