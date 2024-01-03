import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col px-8 sm:px-36">
      <h1>This is DEMO only game.</h1>
      <div className="pt-12">
        <h1 className="text-4xl mb-16 font-bold">Games</h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="box-decoration-clone bg-gradient-to-r from-green-200 to-red-300 text-black text-xl font-semibold p-8 min-w-40 flex flex-col justify-center items-center text-center cursor-pointer">
            <Link href="/bomber">
            <h1 className="">Bomber</h1>
            <Image
              src="/bomb.svg"
              alt="Logo"
              width={85}
              height={85}
              className=""
            />
            </Link>
          </div>
          <div className="box-decoration-clone bg-gradient-to-r from-green-200 to-red-300 text-black text-xl font-semibold p-8 min-w-40 flex flex-col justify-center items-center text-center cursor-pointer">
            <h1>Drop</h1>
            <Image
              src="/bomb.svg"
              alt="Logo"
              width={85}
              height={85}
              className=""
            />
          </div>
          <div className="box-decoration-clone bg-gradient-to-r from-green-200 to-red-300 text-black text-xl font-semibold p-8 min-w-40 flex flex-col justify-center items-center text-center cursor-pointer">
            <h1>Plinko</h1>
            <Image
              src="/bomb.svg"
              alt="Logo"
              width={85}
              height={85}
              className=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
