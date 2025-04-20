import { useContext } from "react";
import { DataContext } from "./data-context";

const PaperButton = () => {
  const { setPickedSign, setIsPicked, isPicked } = useContext(DataContext);
  const PaperButtonHandler = () => {
    setPickedSign(1);
    setIsPicked(true);
  };

  return (
    <div
      onClick={!isPicked ? PaperButtonHandler : null}
      className={`bg-paper-blue shadow-paper-blue ${
        !isPicked && "cursor-pointer"
      } p-4 rounded-[50%]   `}
    >
      <div className="bg-white w-fit p-7 shadow-grey rounded-[50%]">
        <img src="../images/icon-paper.svg" alt="" />
      </div>
    </div>
  );
};

export default PaperButton;
