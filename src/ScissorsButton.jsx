import { useContext } from "react";
import { DataContext } from "./data-context";

const ScissorsButton = () => {
  const { setPickedSign, setIsPicked, isPicked } = useContext(DataContext);
  const ScissorsButtonHandler = () => {
    setPickedSign(0);
    setIsPicked(true);
  };

  return (
    <div
      onClick={!isPicked ? ScissorsButtonHandler : null}
      className={`bg-paper-yellow shadow-paper-yellow ${
        !isPicked && "cursor-pointer"
      } p-4 rounded-[50%]`}
    >
      <div className="bg-white w-fit p-7 shadow-grey rounded-[50%]">
        <img src="../images/icon-scissors.svg" alt="" />
      </div>
    </div>
  );
};

export default ScissorsButton;
