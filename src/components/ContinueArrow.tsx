import { RiArrowDownSLine } from "react-icons/ri";

const ContinueArrow = () => {
  return (
    <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 bottom-44 xl:bottom-2 animate-bounce">
      <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300">
        <RiArrowDownSLine className="text-4xl text-primary hover:text-accent transition-colors duration-300" />
      </div>
    </div>
  );
};

export default ContinueArrow;
