import Image from "next/image";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

export default function DevImg({ containerStyles, imgSrc }: DevImgProps) {
  return (
    <div
      className={`${containerStyles}`}
      style={{
        backgroundImage: "url('/shape-1.svg')",
      }}
    >
      <Image
        width={250}
        height={170}
        src={imgSrc}
        priority
        alt="developer"
        className="absolute top-10 left-[10rem] rounded-full"
      />
    </div>
  );
}
