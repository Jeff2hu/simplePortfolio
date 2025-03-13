"use client";

import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "作品",
    titleLink: "https://music-app-react-express.vercel.app/",
    date: "2025/01/01 ~ 2025/02/31",
    techStack: [
      {
        label: "前端:",
        tools: "React + Zustand + Tailwind + Socket.io",
      },
      {
        label: "後端:",
        tools: "Express + MongoDb + Socket.io",
      },
    ],
    description: [
      "模仿Spotify的播放器，可以播放音樂，也可以建立自己的歌單，",
      "也可以看到朋友正在播放的音樂，以及即時的聊天室。",
    ],
    technicalDetails: [
      "使用 React 設計前端，使用 Express 設計後端，",
      "使用 Socket.io 進行即時聊天室，",
      "使用 MongoDB 進行資料庫的存取，",
      "使用 Gsap 進行動畫效果",
    ],
  },
  {
    title: "教育部因材網遊戲-時空學園",
    date: "2024/02/01 ~ 2025/01/31",
    techStack: [
      {
        label: "前端:",
        tools: "React",
      },
      {
        label: "遊戲:",
        tools: "Godot",
      },
    ],
    description: [
      "屬於卡牌類型遊戲，由台科大教授和一般老師設計鷹架提示和情境題，",
      "讓學生可以藉由遊戲式學習增長知識。",
      "目前因材網內第一個可以讓學生組隊一起玩，以及陣營模式互相競爭。",
    ],
    technicalDetails: [
      "使用 React 設計後台，使用 Godot 設計遊戲。",
      "主要使用為平板，所以在效能優化的部分下滿多功夫，",
      "使用 CDN 加速圖片載入，拆分資源檔，隨時進行資源的釋放等，",
      "在後台創建編輯卡片任務關卡，在遊戲中使用 WebSocket 和後台連線， 以及斷線機制等，讓遊戲可以即時更新。",
    ],
  },
  {
    title: "抽獎系統",
    date: "2024/08/31 ~ 2025/02/01",
    techStack: [
      {
        label: "後端:",
        tools: "Express + MongoDB + Redis + RabbitMQ",
      },
      {
        label: "前端:",
        tools: "React",
      },
    ],
    description: [
      "將5種獎項分別累加至各自獎項，",
      "可即時查看各獎項累積數量，",
      "並且可以即時查看各獎項中獎人數，",
    ],
    technicalDetails: [
      "系統會先透過 RabbitMQ 排序 5 種獎項，處理完成後再擷取資料，並將當前獎項資訊做處理存入Redis，",
      "避免每次查詢時都直接請求資料庫。",
      "使用者可以即時查看各獎項的剩餘數量與中獎人數。",
    ],
  },
  {
    title: "重構遊戲前端",
    date: "2024/02/01 ~ 2024/08/31",
    techStack: [
      {
        label: "前端:",
        tools: "React",
      },
    ],
    technicalDetails: [
      "將原有遊戲前端（Class Component）全面重構，",
      "採用現代化 React 和 React Hooks 搭配 Zustand 提升效能與維護性，",
      "並且使用 i18next 進行多語言管理，",
      "並且所有通訊改為 WebSocket，確保與後台的即時連線與數據同步。",
    ],
  },
  {
    title: "亞洲水泥 - 數位化轉型 (WEB)",
    date: "2023/01/01 ~ 2024/01/31",
    techStack: [
      {
        label: "前端:",
        tools: "React",
      },
    ],
    description: [
      "建立亞洲水泥內部管理系統，可設定各廠的料槽、車輛、員工、設備等資訊。",
      "並能自動生成工地履歷、天氣狀況等報表，提升作業效率。",
    ],
    technicalDetails: [
      "使用 React 設計後台，",
      "搭配 Redux 管理狀態，MUI 設計介面，",
      "使用 React Hook Form 和 Zod 進行表單驗證，以及Recharts生成圖表",
    ],
  },
  {
    title: "亞洲水泥 - 數位化轉型 (APP)",
    date: "2023/01/01 ~ 2024/01/31",
    techStack: [
      {
        label: "APP:",
        tools: "React Native",
      },
    ],
    description: [
      "可於APP掃描QRCODE執行各物料試驗，",
      "並且可以即時查看入料狀況以及出料狀況，",
      "還能查看各試驗結果，當下得知是否有通過CNS規範，",
      "並且可生成各種月報等報表",
    ],
    technicalDetails: [
      "使用 React Native 設計APP，",
      "使用 Expo 的 SDK 進行各種功能開發，",
      "使用 Tailwind CSS 設計介面，",
    ],
  },
  {
    title: "智必立-醫療監控 ( 收尾 )",
    date: "2022/10/01 ~ 2022/12/31",
    techStack: [
      {
        label: "前端:",
        tools: "React",
      },
    ],
    description: [
      "於患者衣服上放置感測器，",
      "並且可以即時查看患者狀況，",
      "還能查看患者運動狀況，",
      "查看患者當天或者當周的整體狀況，",
      "若出現異常，可以即時通知醫護人員",
    ],
    technicalDetails: ["使用 React 設計後台，", "使用 Tailwind CSS 設計介面，"],
  },
];

const ProjectCardsContainer = () => {
  return (
    <div className="flex flex-col my-20 mx-auto px-20 relative">
      <h2 className="text-3xl text-center font-bold">開發專案</h2>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} {...project} id={index + 1} />
      ))}
    </div>
  );
};

export default ProjectCardsContainer;
