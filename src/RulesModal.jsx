import { useContext } from "react";
import { DataContext } from "./data-context";

const RulesModal = () => {
  const { setIsRulesOpen, isRulesOpen } = useContext(DataContext);
  const RulesModalHandler = () => {
    setIsRulesOpen(!isRulesOpen);
  };
  return (
    <div className="flex items-center z-2 justify-center sm:bg-[rgba(0,0,0,0.4)] top-0 right-0 bottom-0 left-0 fixed">
      <div className="flex flex-col font-barlow tracking-widest gap-5 py-8 px-12  rounded-2xl bg-white ">
        <div className="flex justify-between  ">
          <p className="  font-bold text-dark text-2xl ">RULES</p>
          <button onClick={RulesModalHandler}>
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                className="  fill-[#3B4262]/25 duration-300 hover:fill-red-400"
                fill-rule="evenodd"
                d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
              />
            </svg>
          </button>
        </div>
        <img src="../images/image-rules.svg" alt="" />
      </div>
    </div>
  );
};

export default RulesModal;
