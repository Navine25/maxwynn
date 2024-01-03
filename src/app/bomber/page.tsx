"use client";

import { useState } from "react";

import BomberSquare from "../components/bomberSquare";

export default function Bomber() {
  const [numOfSquare, setNumOfSquare] = useState(2);

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
        {/* <div className={`grid grid-cols-${numOfSquare}`}> */}
        <div className={`grid grid-cols-${numOfSquare}`}>
        {Array(numOfSquare <= 1 ? numOfSquare : numOfSquare * numOfSquare).fill(2).map((el, i) =>
          <BomberSquare key={i}/>
        )}
        </div>
      </div>
    </>
  );
}
