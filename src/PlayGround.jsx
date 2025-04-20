import { useContext, useEffect, useState } from "react";
import PaperButton from "./PaperButton";
import RockButton from "./RockButton";
import ScissorsButton from "./ScissorsButton";
import { DataContext } from "./data-context";

const PlayGround = () => {
  const {
    isPicked,
    pickedSign,
    winHandler,
    isWin,

    isLose,
    setIsLose,
    isDraw,
    setIsDraw,
    setIsPicked,
    setIsWin,
  } = useContext(DataContext);
  const [computerPick, setComputerPick] = useState(0);
  const [isComputerPicked, setIsComputerPicked] = useState(false);

  const loseHandler = () => {
    setIsLose(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setComputerPick(Math.floor(Math.random() * 3));

      setIsComputerPicked(true);
      //   endGame();
    }, 1000);
  }, []);
  if (isComputerPicked) {
    if (pickedSign === computerPick) {
      setIsDraw(true);
    } else {
      if (pickedSign === 0) {
        computerPick === 1 ? winHandler() : loseHandler();
      }
      if (pickedSign === 1) {
        computerPick === 2 ? winHandler() : loseHandler();
      }
      if (pickedSign === 2) {
        computerPick === 0 ? winHandler() : loseHandler();
      }
    }
  }
  const resetGame = () => {
    setIsDraw(false);
    setIsLose(false);
    setIsWin(false);
    setIsPicked(false);
  };
  const PlayedSigns = [<ScissorsButton />, <PaperButton />, <RockButton />];

  return (
    <div>
      <div className="flex items-center  font-barlow tracking-wider text-[18px] justify-center sm:gap-40 gap-25 sm:h-[500px] h-[350px] w-[400px]">
        <div className="flex flex-col sm:gap-20 gap-10 items-center  ">
          <p className="sm:order-first order-last ">YOU PICKED</p>
          {isPicked ? (
            PlayedSigns[pickedSign]
          ) : (
            <div className="bg-[rgba(0,0,0,0.2)] rounded-full h-[147px] w-[137px]"></div>
          )}
        </div>
        <div className="flex flex-col sm:gap-20 gap-10 items-center">
          <p className="sm:order-first order-last  ">COMPUTER PICKED</p>
          {isComputerPicked ? (
            PlayedSigns[computerPick]
          ) : (
            <div className="bg-[rgba(0,0,0,0.2)] rounded-full h-[147px] w-[137px]"></div>
          )}{" "}
        </div>
      </div>
      {(isLose || isDraw || isWin) && (
        <div className="fixed flex items-center justify-center font-barlow top-0  right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.3)]">
          <div className=" h-30 w-60 sm:mt-0 flex flex-col justify-center gap-3 items-center text-5xl rounded-2xl">
            <p className="text-white font-bold">
              {isDraw ? "DRAW" : null} {isWin ? "YOU WIN" : null}{" "}
              {isLose ? "YOU LOSE" : null}{" "}
            </p>
            <button
              onClick={resetGame}
              className="  text-xl font-semibold tracking-widest hover:text-red-500 duration-300 text-dark z-2 cursor-pointer bg-white rounded-2xl py-2 px-5"
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayGround;
