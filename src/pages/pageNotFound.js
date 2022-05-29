import React from 'react';
import { useLocation } from 'react-router-dom';

 const PageNotFound = () => {
   let location = useLocation();
  return (
    <div>Page not found <code>{location.pathname}</code></div>
  )
}
export default PageNotFound;