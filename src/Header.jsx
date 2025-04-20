import Score from "./Score";

const Header = () => {
  return (
    <div className="flex items-center lg:gap-60 gap-20 font-barlow border-3 rounded-xl p-4 border-outline">
      <img
        src="../images/logo.svg"
        className="sm:w-[162px] sm:h-[99px] w-[120px] "
        alt=""
      />

      <Score />
    </div>
  );
};

export default Header;
