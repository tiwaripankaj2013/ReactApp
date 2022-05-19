import React,{useContext} from 'react';
import {contextData} from './contextData';


export const UserDetail = () => {
  const userData = useContext(contextData);
  // console.log(userData);
  return (
    <div id="tes">
      <p> {userData[0].name}</p>
      <p> {userData[0].email}</p> 
      <button>Update dta</button>
   </div>
  )
}
