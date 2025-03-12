"use client";

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTailwindCssFill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMui, SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Badge from "./Badge";
import DevImg from "./DevImg";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    Array.from({ length: 6 }).forEach((_, index) => {
      gsap.from(`#project-card-${index + 1}`, {
        scrollTrigger: {
          trigger: `#project-card-${index + 1}`,
          start: "top 70%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.inOut",
      });
    });
  }, []);

  return (
    <section className="px-20 xl:pt-28 dark:bg-none relative overflow-hidden bg-gradient-to-l from-zinc-400/30 to-accent/20">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-gradient-to-r from-primary/80 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-12 w-[200px] h-[200px] bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-20 relative">
        <div className="flex justify-between gap-x-8">
          <div className="max-w-[600px] flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left relative backdrop-blur-sm rounded-2xl p-6">
            <div className="text-sm uppercase font-semibold mb-4 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent tracking-[4px]">
              Front-end Developer
            </div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-sm">
              我叫做
              <span className="text-primary dark:text-primary-foreground transition-colors duration-300 relative">
                朱博宇
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50" />
              </span>
              <br />
              也可以叫我
              <span className="text-primary dark:text-primary-foreground transition-colors duration-300">
                Jeff
              </span>
              <br />
              目前27歲
              <br />
              職位是
              <span className="text-primary dark:text-primary-foreground transition-colors duration-300">
                前端工程師
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-[490px] mx-auto xl:mx-0 my-5 text-zinc-800 leading-relaxed relative z-10 backdrop-blur-sm rounded-lg p-4">
              讓我簡單介紹一下自己，
              <br />
              我是因為疫情期間發現到，
              <br />
              各行各業都受影響，
              <br />
              但軟體工程師似乎不受限，
              <br />
              才讓我開始了自學轉職這條路
            </p>
          </div>
          <div className="hidden xl:flex relative mt-20">
            <Badge
              containerStyles="absolute top-[10%] -left-[2rem] shadow-lg hover:scale-105 transition-transform duration-300"
              icon={<RiBriefcase4Fill className="text-primary" />}
              endCountNum={3}
              badgeText="Years Of Programming"
            />
            <Badge
              containerStyles="absolute top-[65%] left-[4rem] shadow-lg hover:scale-105 transition-transform duration-300"
              icon={<RiTodoFill className="text-primary" />}
              endCountNum={8}
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[40%] -right-[4.5rem] shadow-lg hover:scale-105 transition-transform duration-300"
              icon={<RiTeamFill className="text-primary" />}
              endCountNum={4}
              badgeText="Team Collaboration Experience"
            />
            <div
              className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 opacity-60 dark:opacity-40 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/shape-2-light.svg')",
              }}
            ></div>
            <DevImg
              containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom hover:scale-[1.02] transition-transform duration-300"
              imgSrc="/profolio.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 bottom-44 xl:bottom-2 animate-bounce">
          <div className="p-2 rounded-full bg-primary/10 backdrop-blur-sm">
            <RiArrowDownSLine className="text-3xl text-primary hover:text-accent transition-colors duration-300" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 my-20 mx-auto px-20 relative">
        <h2 className="text-3xl text-center font-bold">技能</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-start items-center">
          <Badge
            containerStyles="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<FaReact className="text-white" />}
            badgeText="React"
            endCountNum={4}
            countUpStyles="text-white ml-3"
            badgeTextStyles="text-white font-bold text-lg ml-4"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<SiRedux className="text-white" />}
            badgeText="Zustand"
            endCountNum={4}
            countUpStyles="text-white ml-1"
            badgeTextStyles="text-white font-bold text-lg ml-3"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<SiRedux className="text-white" />}
            badgeText="Redux"
            endCountNum={3}
            countUpStyles="text-white ml-3"
            badgeTextStyles="text-white font-bold text-lg ml-4"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<RiTailwindCssFill className="text-white" />}
            badgeText="Tailwind"
            endCountNum={4}
            countUpStyles="text-white ml-2"
            badgeTextStyles="text-white font-bold text-lg ml-2"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-blue-500 to-indigo-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<SiMui className="text-white" />}
            badgeText="MUI"
            endCountNum={3}
            countUpStyles="text-white ml-4"
            badgeTextStyles="text-white font-bold text-lg ml-4"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<TbBrandFramerMotion className="text-white" />}
            badgeText="GSAP"
            endCountNum={3}
            countUpStyles="text-white ml-2"
            badgeTextStyles="text-white font-bold text-md ml-4"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<TbBrandFramerMotion className="text-white" />}
            badgeText="Framer Motion"
            endCountNum={3}
            countUpStyles="text-white"
            badgeTextStyles="text-white font-bold text-md ml-2"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-green-600 to-emerald-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<FaNodeJs className="text-white" />}
            badgeText="Node.js"
            endCountNum={3}
            countUpStyles="text-white ml-2"
            badgeTextStyles="text-white font-bold text-lg ml-3"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-green-600 to-emerald-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<FaNodeJs className="text-white" />}
            badgeText="Express"
            endCountNum={3}
            countUpStyles="text-white ml-1"
            badgeTextStyles="text-white font-bold text-lg ml-2"
          />
          <Badge
            containerStyles="bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            icon={<DiMongodb className="text-white" />}
            badgeText="MongoDB"
            endCountNum={1}
            countUpStyles="text-white"
            badgeTextStyles="text-white font-bold text-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 my-20 mx-auto px-20 relative">
        <h2 className="text-3xl text-center font-bold">開發專案</h2>
        <div
          className="flex justify-center items-center gap-x-4"
          id="project-card-1"
        >
          <div className="flex-1 flex flex-col gap-2 min-h-[500px] justify-start p-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg">
            <h2 className="text-2xl font-bold my-4">
              教育部因材網遊戲-時空學園 (2024/02/01 ~ 2025/01/31)
            </h2>
            <h2 className="text-lg">
              後台:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                React
              </span>
            </h2>
            <h2 className="text-lg">
              遊戲:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                Godot
              </span>
            </h2>
            <h2 className="text-lg">
              專案說明:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                屬於卡牌類型遊戲，由台科大教授和一般老師設計鷹架提示和情境題，讓學生可以藉由遊戲式學習增長知識
                <br />
                目前因材網內第一個可以讓學生組隊一起玩，以及陣營模式互相競爭
              </span>
            </h2>
            <h2 className="text-lg">
              技術使用:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                使用React設計後台，使用Godot設計遊戲
                <br />
                在後台創建編輯卡片任務關卡，
                <br />
                在遊戲中使用WebSocket和後台連線以及斷線機制等，
                <br />
                讓遊戲可以即時更新
              </span>
            </h2>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-x-4"
          id="project-card-2"
        >
          <div className="flex-1 flex flex-col gap-2 min-h-[500px] justify-start p-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg">
            <h2 className="text-2xl font-bold my-4">
              抽獎系統 (2024/08/31 ~ 2025/02/01)
            </h2>
            <h2 className="text-lg">
              後端:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                Express + MongoDB + Redis + RabbitMQ
              </span>
            </h2>
            <h2 className="text-lg">
              專案說明:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                將5種獎項分別累加至各自獎項，
                <br />
                並且可以即時查看各獎項剩餘數量，
                <br />
                並且可以即時查看各獎項中獎人數，
              </span>
            </h2>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-x-4"
          id="project-card-3"
        >
          <div className="flex-1 flex flex-col gap-2 min-h-[500px] justify-start p-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg">
            <h2 className="text-2xl font-bold my-4">
              重構遊戲前端 (2024/02/01 ~ 2024/08/31)
            </h2>
            <h2 className="text-lg">
              前端:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                React
              </span>
            </h2>
            <h2 className="text-lg">
              專案說明:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                將原有的遊戲前端(使用class component)重構，
                <br />
                並且全部溝通透過WebSocket和後台連線
              </span>
            </h2>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-x-4"
          id="project-card-4"
        >
          <div className="flex-1 flex flex-col gap-2 min-h-[500px] justify-start p-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg">
            <h2 className="text-2xl font-bold my-4">
              亞洲水泥-數位化轉型(WEB) (2023/01/01 ~ 2024/01/31)
            </h2>
            <h2 className="text-lg">
              後台:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                React
              </span>
            </h2>
            <h2 className="text-lg">
              專案說明:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                設定各廠內部資訊(料槽、車輛、員工、設備等)，
                <br />
                並且可以設定一些新的政府規範，
                <br />
                讓員工可以即時查看並在試驗得知是否通過，
                <br />
                也能生成工地履歷，天氣狀況等
              </span>
            </h2>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-x-4"
          id="project-card-5"
        >
          <div className="flex-1 flex flex-col min-h-[500px] justify-start p-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg">
            <h2 className="text-2xl font-bold my-4">
              亞洲水泥-數位化轉型(APP) (2023/01/01 ~ 2024/01/31)
            </h2>
            <h2 className="text-lg">
              APP:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                React Native
              </span>
            </h2>
            <h2 className="text-lg">
              專案說明:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                可於APP掃描QRCODE執行各物料試驗，
                <br />
                並且可以即時查看入料狀況以及出料狀況，
                <br />
                還能查看各試驗結果，當下得知是否有通過CNS規範，
                <br />
                並且可生成各種月報等報表
              </span>
            </h2>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-x-4"
          id="project-card-6"
        >
          <div className="flex-1 flex flex-col min-h-[500px] justify-start p-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-lg">
            <h2 className="text-2xl font-bold my-4">
              智必立-醫療監控 (2022/10/01 ~ 2022/12/31)
            </h2>
            <h2 className="text-lg">
              後台:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                React
              </span>
            </h2>
            <h2 className="text-lg">
              專案說明:{" "}
              <span className="text-primary font-bold text-2xl mx-1">
                於患者衣服上放置感測器，
                <br />
                並且可以即時查看患者狀況，
                <br />
                還能查看患者運動狀況，
                <br />
                查看患者當天或者當周的整體狀況，
                <br />
                若出現異常，可以即時通知醫護人員
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
