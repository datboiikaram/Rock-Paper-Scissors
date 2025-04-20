import { useContext } from "react";
import { DataContext } from "./data-context";

const RockButton = () => {
  const { setPickedSign, setIsPicked, isPicked } = useContext(DataContext);
  const RockButtonHandler = () => {
    setPickedSign(2);
    setIsPicked(true);
  };
  return (
    <div
      onClick={!isPicked ? RockButtonHandler : null}
      className={`bg-paper-red shadow-paper-red ${
        !isPicked && "cursor-pointer"
      } p-4 rounded-[50%]`}
    >
      <div className="bg-white w-fit p-7 shadow-grey rounded-[50%]">
        <img
          className="w-[51px] h-[58px]"
          src="../images/icon-rock.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RockButton;
