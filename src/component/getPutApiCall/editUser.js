import React, { useState, useEffect } from 'react';


function EditUser(props) {
  let {id} = props.match.params;

  let [userDetails,  setuserDetails] = useState({id: '', name: '', email: '', gender: '', status: ''});
  const fetchData = async () => {
   try {
     let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = { headers: {Authorization: `Bearer ${APITOKEN}`} };
    axios.put(`${APIURL}/users/${id}`, {...userDetails}, config).then(response => {
      if( response.statusText === 'OK' )
      {
        alert('User updated successfully');
      }
    });
  }

  const handleChange = (event) => {
    let userDetail = {...userDetails};
    userDetail[event.target.name] = event.target.value;
    setuserDetails(userDetail);
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="name" className="form-control" name="name" defaultValue={userDetails.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" name="email" defaultValue={userDetails.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select className="form-control" name="gender" defaultValue={userDetails.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select className="form-control" name="status" defaultValue={userDetails.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      <hr />
      <button type="button" className="btn btn-default" onClick={() => props.history.push('/')}>Go Back</button>
    </div>
  );
}

export default EditUser;