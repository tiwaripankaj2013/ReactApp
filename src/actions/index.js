 const increment = () => { 
    return {
       type: "INCREMENT",
       }
   };
 
  const decrement = () => {
   return {
     type: "DECREMENT",
   };
 };

 const takeUdateState = () => {
   return async (dispatch,getState) => {
    dispatch()
   }
 }

 export {increment,decrement}