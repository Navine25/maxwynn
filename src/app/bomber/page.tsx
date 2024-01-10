"use client";

import { useState, useEffect } from "react";

import BomberSquare from "../components/bomberSquare";

export default function Bomber() {
  const [numOfSquare, setNumOfSquare] = useState(2);
  const [bombHit, setBombHit] = useState(false);
  const [gameBomb, setGameBomb] = useState(Array.from({length: numOfSquare},()=> Array.from({length: numOfSquare}, () => null)))

  const increaseNumOfSquare = () => {
    if (numOfSquare < 10) {
      setNumOfSquare(numOfSquare + 1);
    }
  };
  const decreaseNumOfSquare = () => {
    if (numOfSquare > 2) {
      setNumOfSquare(numOfSquare - 1);
    }
  };

  const randomize = () => {
    const bombX:number = Math.floor(Math.random() * numOfSquare);
    const bombY:number = Math.floor(Math.random() * numOfSquare);
    console.log("bombX", bombX)
    console.log("bombY", bombY)
  };

  useEffect(() => {
    randomize()
  }),[]

  return (
    <>
      <div className="px-8 sm:px-36 sm:py-8">
        <h1>Welcome to Bomber!</h1>
        <h1>
          It is a game where you choose a box and win the prize. If you get the
          bomb you lose!
        </h1>
        <div className="flex flex-row gap-2">
          <h1>Number of Square = </h1>
          <p>{numOfSquare}</p>
          <button
            onClick={decreaseNumOfSquare}
            className="text-red-600 font-bold"
          >
            -
          </button>
          <button
            onClick={increaseNumOfSquare}
            className="text-green-500 font-bold"
          >
            +
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <div className={`grid grid-cols-${numOfSquare} gap-4`}>
            {Array(numOfSquare <= 1 ? numOfSquare : numOfSquare * numOfSquare)
              .fill(2)
              .map((el, i) => (
                <BomberSquare key={i} numOfSquare={numOfSquare} bombHit={bombHit}/>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
