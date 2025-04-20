import { useContext } from "react";
import PaperButton from "./PaperButton";
import RockButton from "./RockButton";
import ScissorsButton from "./ScissorsButton";
import { DataContext } from "./data-context";
import PlayGround from "./PlayGround";

const GameLayout = () => {
  const { isPicked } = useContext(DataContext);

  const AllSigns = [<PaperButton />, <RockButton />, <ScissorsButton />];

  // if (isPicked) {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setComputerPick(Math.floor(Math.random() * 3));
  //     }, 1000);
  //   }, []);
  // }
  if (!isPicked) {
    return (
      <div className="bg-[url(../images/bg-triangle.svg)] bg-no-repeat relative bg-center h-[400px] w-[400px]">
        <div className="absolute top-0">
          <PaperButton />
        </div>
        <div className="absolute bottom-0 right-[50%] -translate-x-[-50%]  ">
          <RockButton />
        </div>
        <div className="absolute top-0 right-0">
          <ScissorsButton />
        </div>
      </div>
    );
  } else {
    return <PlayGround />;
  }
};
export default GameLayout;
