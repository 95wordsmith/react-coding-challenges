import { useState, useEffect, useRef } from "react";
import Boxes from "./boxes";
const ReverseGame = () => {
  const config = [
    [1, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 0],
  ];
  const totalConfig = config.flat(Infinity).filter(Boolean).length;
  const [selectedBox, setSelectedBox] = useState([]);
  const intervalRef = useRef();

  useEffect(() => {
    if (selectedBox.length === totalConfig) {
      console.log("called");

      intervalRef.current = setInterval(() => {
        console.log("called interval");
        setSelectedBox((prev) => {
          if (prev.length > 0) {
            const copied = [...prev];
            copied.pop();
            return copied;
          } else {
            clearInterval(intervalRef.current);

            return prev;
          }
        });
      }, 500);
    }
  }, [selectedBox.length, totalConfig]);

  const handleSelectBox = (ind) => {
    setSelectedBox((prev) => [...prev, ind]);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-[450px] mx-auto mb-10">
        {config.flat(Infinity).map((bin, index) => (
          <Boxes
            key={index}
            box={bin}
            handleBox={() => handleSelectBox(index)}
            selected={selectedBox}
            boxIndex={index}
          />
        ))}
      </div>
    </>
  );
};

export default ReverseGame;
