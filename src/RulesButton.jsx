import { useContext } from "react";
import { DataContext } from "./data-context";

const RulesButton = () => {
  const { setIsRulesOpen, isRulesOpen } = useContext(DataContext);
  const RulesModalHandler = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  return (
    <button
      onClick={RulesModalHandler}
      className="border-2 sm:self-end rounded-xl py-2 px-7 font-bold tracking-[2px] self-center "
    >
      RULES
    </button>
  );
};

export default RulesButton;
