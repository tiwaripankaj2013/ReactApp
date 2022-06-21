import CounterClass from "./component/class/CounterClass";
import { Calculator } from "./component/functional/Calculator";
import Counter from "./component/counter";
import UseContextHook from "./component/useContext";
import ToodoTaskClassComponent from "./component/class/Todo";
import TodoFunctionalComponent from "./component/functional/ToDo";
import UserReducerHooks from "./component/userReducer";
import UseCallBackHooks from "./component/useCallBack";
import Async from "./component/testCase/async";
import Inputref from "./component/functional/inputref";
import RegisterForm from './component/form/registerForm';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./component/header";
function App() {
  // class component

  return (
    <div className=" bg-gray-100 p-4">
      <Router>
      <Header />
      <h1 className=" text-xl text-purple-700">Welcome To JS Learning</h1>
      <div className="flex bg-white p-6">
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="/counterClass" element={<CounterClass />}/>
          <Route path="/calculator" element={<Calculator />}/>
          <Route path="/todoClass" element={<ToodoTaskClassComponent />}/>
          <Route path="/todoFunctionalComp" element={<TodoFunctionalComponent />}/>
          <Route path="/useContextHooks" element={<UseContextHook />}/>
          <Route path="/useReducerHooks" element={<UserReducerHooks />}/>
          <Route path="/useCallBackHooks" element={<UseCallBackHooks />}/>
          <Route path="/async" element={<Async />}/>
          <Route path="/useref" element={<Inputref />}/>
          <Route path="/registerForm" element={<RegisterForm />}/>
        </Routes>
        </div>
      </Router>
    
       
    </div>
  );
}

export default App;
