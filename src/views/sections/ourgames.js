import React from "react";
import Image from "next/image";
const Ourgames = () => {
  return (
    <section className="xxl-max-screen w-full flex flex-col">
      <div className="w-full flex gap-4">
        {[
          "/images/game1.png",
          "/images/game2.png",
          "/images/game3.svg",
          "/images/game4.svg",
          "/images/game5.svg",
        ]?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Our game"
            width={276}
            height={458}
          />
        ))}
      </div>
      <div className="w-full flex justify-between">
        <Image
          src={"/images/game4.svg"}
          alt="Our game"
          width={276}
          height={458}
        />
        <div></div>
        <Image
          src={"/images/game4.svg"}
          alt="Our game"
          width={276}
          height={458}
        />
      </div>

      <div className=" w-full flex gap-4">
        {[
          "/images/game1.svg",
          "/images/game2.png",
          "/images/game3.svg",
          "/images/game4.svg",
          "/images/game5.svg",
        ]?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Our game"
            width={276}
            height={458}
          />
        ))}
      </div>
    </section>
  );
};
export default Ourgames;
