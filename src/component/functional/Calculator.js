import React,{useState} from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Calculator = () => {
   const {calValue, SetcalValue} = useState(0);
  return (
    <div className="bg-gray-200">
      <div className=" max-w-sm border-2 border-violet-800 mx-auto shadow-xl">
         <div className="max-w-[12rem] mx-auto">
            <Input className="w-full px-2 py-1 border border-gray-600" inputvalue={calValue} type="number" />
         </div>
        <div className="flex justify-center">
          <Button label="C" onClick={() => {}} />
          <Button label="+/-" />
          <Button label="%" />
          <Button label="/" />
        </div>
        <div className="flex justify-center">
          <Button label="7" onClick={() => SetcalValue(7)}/>
          <Button label="8" onClick={() => SetcalValue(8)}/>
          <Button label="9" onClick={() => SetcalValue(9)}/>
          <Button className="bg-yellow-500 w-12" label="X" />
        </div>
        <div className="flex justify-center">
          <Button label="4" onClick={() => SetcalValue(4)}/>
          <Button label="5" onClick={() => SetcalValue(5)} />
          <Button label="6" onClick={() => SetcalValue(6)} />
          <Button className="bg-yellow-500 w-12" label="-" />
        </div>
        <div className="flex justify-center">
          <Button label="1" onClick={() => SetcalValue(1)}/>
          <Button label="2" onClick={() => SetcalValue(2)}/>
          <Button label="3" onClick={() => SetcalValue(3)}/>
          <Button className="bg-yellow-500 w-12" label="+" />
        </div>
        <div className="flex justify-center">
          <Button label="0" />
          <Button label="." />
          <Button label="del" />
          <Button className="bg-yellow-600 w-12" label="=" />
        </div>
      </div>
    </div>
  );
};
