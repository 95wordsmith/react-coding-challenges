import { DATA } from "../../data";
import { useEffect, useState } from "react";
import Item from "./item";
const extractAndRandomize = () => {
  let data = Object.entries(DATA).flat(Infinity);
  let randomizedData = data.sort(() => Math.random() - 0.5);
  return new Set(randomizedData);
};

const Game = () => {
  const [gameData, setGameData] = useState(extractAndRandomize());
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (selected.length === 2) {
      checkCorrect(selected);
    }
    if (status === "correct") {
      setTimeout(() => {
        deleteSelected();
        setSelected([]);
        setStatus(null);
      }, 1000);
    }
    if (status === "wrong") {
      setTimeout(() => {
        setSelected([]);
        setStatus(null);
      }, 1000);
    }
  }, [selected.length, status]);

  function deleteSelected() {
    setGameData((prev) => {
      const alteredGame = new Set(prev);
      alteredGame.delete(selected[0]);
      alteredGame.delete(selected[1]);
      return alteredGame;
    });
  }

  function checkCorrect(array) {
    let firstOption = array[0];
    let secondOption = array[1];

    let map = new Map(Object.entries(DATA));

    if (map.get(firstOption) === secondOption) {
      setStatus("correct");
      return;
    }
    setStatus("wrong");
  }

  const handleSelect = (item) => {
    if (selected.length === 2) {
      return;
    }

    setSelected((prev) => [...prev, item]);
  }; 
  if (gameData.size < 1) {
    return (
      <h1 className="w-full text-center mt-48 h-screen px-24 text-6xl font-bold">
        Congratulations!
      </h1>
    );
  }
  return (
    <div className="w-full h-screen px-24  ">
      <div className="flex gap-4 mt-48 flex-wrap justify-center">
        {[...gameData].map((item) => (
          <Item
            status={status}
            selected={selected}
            key={item}
            data={item}
            handleSelect={() => handleSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
