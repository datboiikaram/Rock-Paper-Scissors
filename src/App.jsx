import { useEffect, useState } from "react";
import "./App.css";
import { DataContext } from "./data-context";
import GameLayout from "./GameLayout";
import Header from "./Header";
import RulesButton from "./RulesButton";
import RulesModal from "./RulesModal";

function App() {
  const [pickedSign, setPickedSign] = useState();
  const [isPicked, setIsPicked] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const saveToDB = (data, key) => {
    localStorage.setItem(key, data);
  };
  const winHandler = () => {
    setScoreCount(Number(scoreCount) + 1);
    setIsWin(true);
    saveToDB(scoreCount, "score");
  };

  useEffect(() => {
    localStorage.getItem("score")
      ? setScoreCount(localStorage.getItem("score"))
      : setScoreCount(0);
  }, [scoreCount]);

  return (
    <DataContext.Provider
      value={{
        pickedSign,
        setPickedSign,
        isPicked,
        setIsPicked,
        scoreCount,

        winHandler,
        isRulesOpen,
        setIsRulesOpen,
        isWin,
        setIsWin,
        isGameEnded,
        setIsGameEnded,
        isLose,
        setIsLose,
        isDraw,
        setIsDraw,
      }}
    >
      <div className="flex flex-col sm:gap-25 gap-15 justify-start  items-center h-[100vh] sm:pt-12 pt-8 w-full  ">
        <Header />
        <GameLayout />
        <RulesButton />
      </div>
      {isRulesOpen && <RulesModal />}
    </DataContext.Provider>
  );
}

export default App;
