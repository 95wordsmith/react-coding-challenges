import React, { useState } from "react";
import Button from "./Button";
import Range from "./range";
import usePasswordGenerator from "../hooks/usePasswordGenerator";
import Strength from "./Strength";
const PasswordGen: React.FC = () => {
const { generatePassword,password, copyPassword} = usePasswordGenerator()

  const [rangeValue, setRangeValue] = useState<number>(4);
  const [conditions, setConditions] = useState([
    { name: 'Include Uppercase Letters', state: false },
    { name: 'Include Lowercase Letters', state: false },
    { name: 'Include Numbers', state: false },
    { name: 'Include Symbols', state: false },
  ]);

  function passwordCopy(){
    copyPassword()
  }
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  const handleCheckboxChange = (index: number) => {
    setConditions(prevConditions =>
      prevConditions.map((con, i) =>
        i === index ? { ...con, state: !con.state } : con
      )
    );

    
  };

  function passwordGenerate(){
    generatePassword(rangeValue,conditions)
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-gray-50 font-medium w-3/4  bg-gray-800 p-4">
        <div className="flex justify-between">
          <p>{password}</p>
          <Button onClick={passwordCopy} classnames="uppercase">Copy</Button>
        </div>
        <div className="flex justify-between">
          <h1 className="text-left">Character Length</h1>
          <h1 className="text-left">{rangeValue}</h1>
        </div>
        <Range
          type="range"
          min={4}
          max={12}
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <div className="grid grid-cols-2 gap-8" >
        {conditions.map((con, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={con.state}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="ml-2">{con.name}</span>
          </div>
        ))}

        </div>
        <Strength password={password} />
        <Button onClick={passwordGenerate} classnames="w-full">Generate Password</Button>
      </div>
    </div>
  );
};

export default PasswordGen;