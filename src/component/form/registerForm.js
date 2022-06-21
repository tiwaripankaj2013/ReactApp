import React,{useState} from "react";

const RegisterForm = () => {
  const [employee, setEmployee] = useState({
    fname: "",
    lname: "",
    dob: "",
    desination: "",
    profile: "",
    exp: "",
    id: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  const [employeeList, setEmployeeList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newEmployee = { ...employee, id: new Date().getTime().toString() };
    setEmployeeList([...employeeList, newEmployee]);
    setEmployee({
      fname: "",
      lname: "",
      dob: "",
      profile: "",
      exp: "",
      id: "",
    });
  };
  return (
    <div>
      <form method="post" onSubmit={submitHandler}>
        <div className="mb-2">
          <label>First Name</label>
          <input
            className="border border-gray-500 px-2 py-1 w-8/12"
            type="text"
            value={employee.fname}
            name='fname'
            onChange={changeHandler}
          />
        </div>
        <div className="mb-2">
          <label>Last Name</label>
          <input
            className="border border-gray-500 px-2 py-1 w-8/12"
            type="text"
            name='lname'
            value={employee.lname}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-2">
          <label>DOB</label>
          <input
            className="border border-gray-500 px-2 py-1 w-8/12"
            type="date"
            name='dob'
            value={employee.dob}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-2">
          <label>Profile</label>
          <input
            className="border border-gray-500 px-2 py-1 w-8/12"
            type="url"
            name='profile'
            value={employee.profile}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-2">
          <label>Experience</label>
          <input
            className="border border-gray-500 px-2 py-1 w-8/12"
            type="text"
            name='exp'
            value={employee.exp}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className="py-1 px-3 bg-blue-800">Submit</button>
        </div>
      </form>
      <div>
        <h3>User List</h3>
        <ul>
          {employeeList.map((emp) => {
            return(<li key={emp.id}>
              <span>{emp.fname}</span>
              <span>{emp.lname}</span>
              <span>{emp.dob}</span>
              <span>{emp.profile}</span>
              <span>{emp.exp}</span>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
};

export default RegisterForm;
