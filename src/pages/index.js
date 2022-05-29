import React from 'react'
import CounterClass from "../component/class/CounterClass";
import { Calculator } from "../component/functional/Calculator";
import Counter from "../component/counter";
import UseContextHook from "../component/useContext";
import ToodoTaskClassComponent from "../component/class/Todo";
import TodoFunctionalComponent from "../component/functional/ToDo";
import UserReducerHooks from "../component/userReducer";
import { Redux } from "../component/redux";
import { MemoHooks } from "../component/memo";
import { UseMemoHooks } from '../component/useMemo';
import UseCallBack from '../component/useCallBack';
export const Home = () => {
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
        <div className="w-4/12">
          {/*  Redux  example */}
          <Redux />
        </div>
      </div>
      <div className="mt-10 flex">
        <div className="w-4/12">
          <p>React.momo</p>
          {/*  context provide  hooks example */}
          <MemoHooks />
        </div>
        <div className="w-4/12">
          {/*  context provide useMemo  hooks example */}
          <UseMemoHooks />
        </div>
        <div className="w-4/12">
          {/*  context provide useCallBack  hooks example */}
          <UseCallBack />
        </div>
        </div>

    </div>
  )
}
