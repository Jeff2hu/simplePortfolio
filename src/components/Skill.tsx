import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Badge from "./Badge";

const SKILLS = [
  {
    name: "React",
    icon: <FaReact />,
    color: "from-red-500 to-orange-500",
    score: 4,
  },
  {
    name: "Zustand",
    icon: <SiRedux />,
    color: "from-orange-500 to-yellow-500",
    score: 4,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-yellow-500 to-green-500",
    score: 4,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "from-green-500 to-teal-500",
    score: 3,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "from-teal-500 to-cyan-500",
    score: 3,
  },
  {
    name: "GSAP",
    icon: <TbBrandFramerMotion />,
    color: "from-cyan-500 to-blue-500",
    score: 3,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
    color: "from-blue-500 to-indigo-500",
    score: 3,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "from-indigo-500 to-purple-500",
    score: 3,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "from-purple-500 to-pink-500",
    score: 2,
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "from-pink-500 to-rose-500",
    score: 2,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-rose-500 to-red-500",
    score: 2,
  },
];

const Skill = () => {
  return (
    <div className="flex flex-col gap-y-8 my-20 mx-auto px-20 relative">
      <h2 className="text-3xl text-center font-bold">技能</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-5 justify-start items-center">
        {SKILLS.map((skill) => (
          <Badge
            key={skill.name}
            icon={skill.icon}
            containerStyles={`${skill.color} badgeSkill`}
            countUpStyles={`text-white ${skill.name.length <= 6 ? "ml-3" : ""}`}
            badgeTextStyles={`text-white font-bold text-lg ${
              skill.name.length <= 6 ? "ml-3" : "ml-1"
            }`}
            endCountNum={skill.score}
            badgeText={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
