import CounterClass from "./component/class/CounterClass";
import { Calculator } from "./component/functional/Calculator";
import Counter from "./component/counter";
import UseContextHook from "./component/useContext";
import ToodoTaskClassComponent from "./component/class/Todo";
import TodoFunctionalComponent from "./component/functional/ToDo";
import UserReducerHooks from "./component/userReducer";
import Greetings from "./component/testCase/greetings";
import Async from "./component/testCase/async";

function App() {
  // class component

  return (
    <div className=" bg-gray-100 p-4">
      <h1 className=" text-xl text-purple-700">Welcome TO JS Learning</h1>
      <div className="flex">
        <div className="w-4/12">
          <Counter />
          <CounterClass />
          <Calculator />
        </div>
        <div className="w-4/12">
          {/* class component  */}

          <ToodoTaskClassComponent />
          {/* class component  */}
        </div>
        <div className="w-4/12">
          {/* todo functional component  */}

          <TodoFunctionalComponent />
          {/* todo functional component  */}
        </div>
      </div>

      <div className="mt-10 flex">
        <div className="w-4/12">
          {/*  context provide usecontext hooks example */}
          <UseContextHook />
        </div>
        <div className="w-4/12">
          {/*  useReducer hooks  example */}
          <UserReducerHooks />
        </div>
      </div>
      <div className="mt-10 flex">
        <Greetings />
        <Async/>
      </div>
    </div>
  );
}

export default App;
