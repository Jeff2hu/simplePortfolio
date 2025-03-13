import Image from "next/image";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import Badge from "../components/Badge";

export default function DevImg() {
  return (
    <div className="hidden xl:flex relative mt-20">
      <Badge
        containerStyles="absolute top-[5%] -left-[3rem]"
        icon={<RiBriefcase4Fill className="badgeText text-xl" />}
        endCountNum={3}
        badgeText="Years Of Programming"
      />
      <Badge
        containerStyles="absolute top-[75%] left-[4rem]"
        icon={<RiTodoFill className="badgeText" />}
        endCountNum={8}
        badgeText="Finished Projects"
      />
      <Badge
        containerStyles="absolute top-[40%] -right-[5.5rem]"
        icon={<RiTeamFill className="badgeText" />}
        endCountNum={4}
        badgeText="Team Collaboration Experience"
      />
      <div
        className="w-[550px] h-[550px] bg-no-repeat absolute -top-1 -right-[6rem] opacity-70 dark:opacity-50 transition-all duration-300 hover:opacity-90"
        style={{
          backgroundImage: "url('/shape-2-light.svg')",
          filter: "blur(1px)",
        }}
      />
      <div
        className="w-[510px] h-[462px] bg-no-repeat relative bg-bottom hover:scale-105 transition-all duration-500 rounded-2xl"
        style={{
          backgroundImage: "url('/shape-1.svg')",
        }}
      >
        <Image
          width={300}
          height={300}
          src="/profolio.png"
          priority
          alt="developer"
          className="absolute top-14 left-[7rem] rounded-full"
        />
      </div>
    </div>
  );
}
