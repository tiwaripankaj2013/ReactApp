import React from 'react';
import { UserDetail } from './userDetail';
export const UserList = () => {
  return (
    <div className=" bg-gray-400 p-4">
         {/* {props.data.map((user) =>{<UserDetail id={user.id} name={user.name} email={user.email}/>})} */}
         <UserDetail />
    </div>
  )
}
