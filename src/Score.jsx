import { useContext } from "react";
import { DataContext } from "./data-context";

const Score = () => {
  const { scoreCount } = useContext(DataContext);

  return (
    <div className="bg-white text-black sm:py-2 sm:px-10 py-2 px-6 rounded-xl">
      <p className="text-score sm:text-2xl text-xl">SCORE</p>
      <p className="text-dark font-bold sm:text-6xl text-3xl">{scoreCount}</p>
    </div>
  );
};
export default Score;
