import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const UserDetails = () => {
  let {id} = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        let data = await response.json();
        setUser(data);
        setIsLoaded(true);
        return data;
      } catch (error) {
        setIsLoaded(true);
        setError(error);
        return error;
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  console.log(user);
  if (user) {
    return (
      <div className="container mx-auto my-6">
        <h2>userDetails</h2>
        <p className=" text-gray-700">{user.name}</p>
        <p className=" text-gray-700">{user.email}</p>
        <p className=" text-gray-700">{user.username}</p>
        <p className=" text-gray-700">{user.website}</p>
        <p className=" text-gray-700">{user.phone.split(' ').slice(0,1)}</p>
      </div>
    );
  }
};
