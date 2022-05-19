import React, { useReducer, useState } from "react";

let initialState = [
  { id: Date.now(), name: "pankaj", email: "pankaj@gmail.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state,action.payload];
    case "delete":
      return state.filter(contact => {
         return contact.id !== action.payload.id;
       });
    default:
      throw new Error();
  }
}
const UserReducerHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) =>{
   e.preventDefault();

   const contact = {
      id :Date.now(),
      name:name,
      email:email,
   }
   setName('');
   setEmail('');
   dispatch({type:'add',payload:contact})
  }

  return (
    <div className="p-4">
      <h4>Use Reducer hooks</h4>
      <form onSubmit={addContact}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add User</button>
      </form>

      <div className="border border-gray-800">
        <ul>
          {state.map((data) => {
            return (
              <li key={data.id}>
                <span className="px-3 inline-block">{data.name}</span>
                <span className="px-3 inline-block">{data.email}</span>
                <button onClick={()=> dispatch({type:'delete',payload:{id:data.id}})}>Delet</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserReducerHooks;
