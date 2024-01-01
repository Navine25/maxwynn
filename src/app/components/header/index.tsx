import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="w-screen h-18 px-4 sm:px-32 grid sm:grid-cols-3 grid-cols-2">
        <Image
          src="/maxwynn.png"
          alt="Logo"
          width={100}
          height={100}
          sizes="(max-width:320px) 75px, (min-width:321px) 100px"
          className=""
        />
        <div className="flex flex-row justify-center ">
          <nav className="flex flex-row gap-5 max-[321px]:gap-3 max-[321px]:text-xs items-center">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">Games</a>
            </div>
            <div>
              <a href="">Help</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
