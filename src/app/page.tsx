"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTailwindCssFill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { SiMui, SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Badge from "./Badge";
import BoxToPageAnimation from "./BoxToPageAnimation";
import DevImg from "./DevImg";

export default function Home() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    if (!isAnimationDone) return;

    gsap.registerPlugin(ScrollTrigger);
    Array.from({ length: 7 }).forEach((_, index) => {
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
  }, [isAnimationDone]);

  return (
    <>
      {!isAnimationDone && (
        <BoxToPageAnimation onAnimationEnd={() => setIsAnimationDone(true)} />
      )}
      {isAnimationDone && (
        <main className="w-full min-h-screen opacity-0 animate-fadeIn">
          <section className="relative z-20 px-20 xl:pt-28 dark:bg-none overflow-hidden bg-gradient-to-l from-zinc-400/30 to-accent/20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-r from-primary/60 to-accent/30 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-1/3 -left-12 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-20 relative h-[85vh]">
              <div className="flex justify-between gap-x-12">
                <div className="max-w-[600px] flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left relative backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                  <div className="text-sm uppercase font-semibold mb-6 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent tracking-[4px]">
                    Front-end Developer
                  </div>
                  <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    我叫做
                    <span className="text-primary dark:text-primary-foreground transition-all duration-300 relative group">
                      朱博宇
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50 group-hover:h-2 transition-all duration-300" />
                    </span>
                    <br />
                    也可以叫我
                    <span className="text-primary dark:text-primary-foreground transition-colors duration-300 hover:text-accent">
                      Jeff
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl max-w-[490px] mx-auto xl:mx-0 my-8 text-zinc-700 dark:text-zinc-300 leading-relaxed relative z-10 backdrop-blur-sm rounded-lg p-6 bg-white/5">
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
                    containerStyles="absolute top-[5%] -left-[3rem] shadow-xl hover:scale-110 transition-transform duration-300"
                    icon={<RiBriefcase4Fill className="text-primary text-xl" />}
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
                    className="w-[550px] h-[550px] bg-no-repeat absolute -top-1 -right-[6rem] opacity-70 dark:opacity-50 transition-all duration-300 hover:opacity-90"
                    style={{
                      backgroundImage: "url('/shape-2-light.svg')",
                      filter: "blur(1px)",
                    }}
                  />
                  <DevImg
                    containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom hover:scale-105 transition-all duration-500 rounded-2xl"
                    imgSrc="/profolio.png"
                  />
                </div>
              </div>
              <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 bottom-44 xl:bottom-2 animate-bounce">
                <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300">
                  <RiArrowDownSLine className="text-4xl text-primary hover:text-accent transition-colors duration-300" />
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
                  endCountNum={3}
                  countUpStyles="text-white"
                  badgeTextStyles="text-white font-bold text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col my-20 mx-auto px-20 relative">
              <h2 className="text-3xl text-center font-bold">開發專案</h2>

              <div className="flex flex-col gap-8 p-8" id="project-card-1">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2
                    className="text-4xl font-bold cursor-pointer hover:text-accent transition-all duration-300 underline underline-offset-4 text-blue-600"
                    onClick={() =>
                      window.open(
                        "https://music-app-react-express.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    作品
                  </h2>
                  <p className="text-base text-gray-500">
                    2025/01/01 ~ 2025/02/31
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">
                      前端:{" "}
                      <span className="text-primary font-bold">
                        React + Zustand + Tailwind + Socket.io
                      </span>
                    </p>
                    <p className="text-xl font-semibold">
                      後端:{" "}
                      <span className="text-primary font-bold">
                        Express + MongoDb + Socket.io
                      </span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">專案說明</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      模仿Spotify的播放器，可以播放音樂，也可以建立自己的歌單，
                      <br />
                      也可以看到朋友正在播放的音樂，以及即時的聊天室。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      使用 React 設計前端，使用 Express 設計後端，
                      <br />
                      使用 Socket.io 進行即時聊天室，
                      <br />
                      使用 MongoDB 進行資料庫的存取，
                      <br />
                      使用 Gsap 進行動畫效果
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8" id="project-card-2">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2 className="text-4xl font-bold text-primary">
                    教育部因材網遊戲-時空學園
                  </h2>
                  <p className="text-base text-gray-500">
                    2024/02/01 ~ 2025/01/31
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">
                      後台:{" "}
                      <span className="text-primary font-bold">React</span>
                    </p>
                    <p className="text-xl font-semibold">
                      遊戲:{" "}
                      <span className="text-primary font-bold">Godot</span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">專案說明</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      屬於卡牌類型遊戲，由台科大教授和一般老師設計鷹架提示和情境題，
                      讓學生可以藉由遊戲式學習增長知識。
                      <br />
                      目前因材網內第一個可以讓學生組隊一起玩，以及陣營模式互相競爭。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      使用 React 設計後台，使用 Godot 設計遊戲。
                      <br />
                      主要使用為平板，所以在效能優化的部分下滿多功夫，
                      <br />
                      使用 CDN 加速圖片載入，拆分資源檔，隨時進行資源的釋放等，
                      <br />
                      在後台創建編輯卡片任務關卡，在遊戲中使用 WebSocket
                      和後台連線， 以及斷線機制等，讓遊戲可以即時更新。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8" id="project-card-3">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2 className="text-4xl font-bold text-primary">抽獎系統</h2>
                  <p className="text-base text-gray-500">
                    2024/08/31 ~ 2025/02/01
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">
                      後端:{" "}
                      <span className="text-primary font-bold">
                        Express + MongoDB + Redis + RabbitMQ
                      </span>
                    </p>
                    <p className="text-xl font-semibold">
                      前端:{" "}
                      <span className="text-primary font-bold">React</span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">專案說明</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      將5種獎項分別累加至各自獎項，
                      <br />
                      可即時查看各獎項累積數量，
                      <br />
                      並且可以即時查看各獎項中獎人數，
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      系統會先透過 RabbitMQ 排序 5
                      種獎項，處理完成後再擷取資料，並將當前獎項資訊做處理存入Redis，
                      <br />
                      避免每次查詢時都直接請求資料庫。
                      <br />
                      使用者可以即時查看各獎項的剩餘數量與中獎人數。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8" id="project-card-4">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2 className="text-4xl font-bold text-primary">
                    重構遊戲前端
                  </h2>
                  <p className="text-base text-gray-500">
                    2024/02/01 ~ 2024/08/31
                  </p>
                  <p className="text-xl font-semibold">
                    前端: <span className="text-primary font-bold">React</span>
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      將原有遊戲前端（Class Component）全面重構，
                      <br />
                      採用現代化 React 和 React Hooks 搭配 Zustand
                      提升效能與維護性，
                      <br />
                      並且使用 i18next 進行多語言管理，
                      <br />
                      並且所有通訊改為
                      WebSocket，確保與後台的即時連線與數據同步。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8" id="project-card-5">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2 className="text-4xl font-bold text-primary">
                    亞洲水泥 - 數位化轉型 (WEB)
                  </h2>
                  <p className="text-base text-gray-500">
                    2023/01/01 ~ 2024/01/31
                  </p>
                  <p className="text-xl font-semibold">
                    後台: <span className="text-primary font-bold">React</span>
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">專案說明</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      建立亞洲水泥內部管理系統，可設定各廠的料槽、車輛、員工、設備等資訊。
                      <br />
                      並能自動生成工地履歷、天氣狀況等報表，提升作業效率。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      使用 React 設計後台，
                      <br />
                      搭配 Redux 管理狀態，MUI 設計介面，
                      <br />
                      使用 React Hook Form 和 Zod
                      進行表單驗證，以及Recharts生成圖表
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8" id="project-card-6">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2 className="text-4xl font-bold text-primary">
                    亞洲水泥 - 數位化轉型 (APP)
                  </h2>
                  <p className="text-base text-gray-500">
                    2023/01/01 ~ 2024/01/31
                  </p>
                  <p className="text-xl font-semibold">
                    APP:{" "}
                    <span className="text-primary font-bold">React Native</span>
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">專案說明</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      可於APP掃描QRCODE執行各物料試驗，
                      <br />
                      並且可以即時查看入料狀況以及出料狀況，
                      <br />
                      還能查看各試驗結果，當下得知是否有通過CNS規範，
                      <br />
                      並且可生成各種月報等報表
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      使用 React Native 設計APP，
                      <br />
                      使用 Expo 的 SDK 進行各種功能開發，
                      <br />
                      使用 Tailwind CSS 設計介面，
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8" id="project-card-7">
                <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-md rounded-xl">
                  <h2 className="text-4xl font-bold text-primary">
                    智必立-醫療監控 ( 收尾 )
                  </h2>
                  <p className="text-base text-gray-500">
                    2022/10/01 ~ 2022/12/31
                  </p>
                  <p className="text-xl font-semibold">
                    後台: <span className="text-primary font-bold">React</span>
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">專案說明</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      於患者衣服上放置感測器，
                      <br />
                      並且可以即時查看患者狀況，
                      <br />
                      還能查看患者運動狀況，
                      <br />
                      查看患者當天或者當周的整體狀況，
                      <br />
                      若出現異常，可以即時通知醫護人員
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">技術使用</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      使用 React 設計後台，
                      <br />
                      使用 Tailwind CSS 設計介面，
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
