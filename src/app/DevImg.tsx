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
        width={300}
        height={300}
        src={imgSrc}
        priority
        alt="developer"
        className="absolute top-14 left-[7rem] rounded-full"
      />
    </div>
  );
}
