import React,{useState,useCallback} from 'react';
import { Button } from './button';
import Title from './title';
import AgeComponent from './ageComp';
import SalaryComponent from './salaryComp';

const UseCallBack = () => {
   const [age,setAge] = useState(21);
   const [salary, setSalary] = useState(25000);
// useCall back hooks meorize the function if dependencies has been changes then its 
// render 
   const incrementAge = useCallback(()=>{
      setAge(age +1);
   },[age]);
   const incrementSalary =  useCallback(()=>{
      setSalary(salary +1000);
   },[salary]);
  return (
    <div>
       <Title title="Use Call Back Hooks " />
       <AgeComponent data={age} />
       <Button handleClick={incrementAge}>Add Age</Button>
       <SalaryComponent data={salary} />
       <Button handleClick={incrementSalary}>Increase Salary</Button>
    </div>
  )
}

export default UseCallBack