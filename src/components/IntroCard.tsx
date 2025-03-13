const IntroCard = () => {
  return (
    <div className="max-w-[600px] flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left relative backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
      <div className="text-sm uppercase font-semibold mb-6 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent tracking-[4px]">
        Front-end Developer
      </div>
      <h1 className="headerTitle">
        我叫做
        <span className="transition-all duration-300 relative group">
          朱博宇
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50 group-hover:h-2 transition-all duration-300" />
        </span>
        <br />
        也可以叫我
        <span className="transition-colors duration-300 hover:text-primary-foreground">
          Jeff
        </span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl max-w-[490px] mx-auto xl:mx-0 my-8 text-zinc-700 dark:text-zinc-300 leading-relaxed relative z-10 backdrop-blur-sm rounded-lg p-6 bg-white/5">
        讓我簡單介紹一下自己，
        <br />
        因為疫情發現到軟體不限國界，
        <br />
        才開始了自學和發現了前端，
        <br />
        也才踏上軟體工程師這條路，
        <br />
        接下來就讓我們一起來往下吧!
      </p>
    </div>
  );
};

export default IntroCard;
