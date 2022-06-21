import React, { useRef } from "react";

const Inputref = () => {
  const inputvalue = useRef();
  
  const handleSubmit = (e) => {
   e.preventDefault();
   const inputTest = inputvalue.current.value;
   console.log(inputTest);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p>Input ref value</p>
      <input ref={inputvalue} placeholder="input name" type="text" required />
      <button>test</button>
      </form>
    </div>
  
  );
};

export default Inputref;
