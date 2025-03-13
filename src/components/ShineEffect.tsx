const BackgroundGradient = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-r from-primary/80 to-accent/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 -left-12 w-[300px] h-[300px] bg-primary/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/20 to-transparent" />
    </div>
  );
};

export default BackgroundGradient;
