import { useState } from "react";
import Image from "next/image";

type bomberProps = {
  numOfSquare: number;
  bombHit: boolean;
};

function calculateWh(inputNumber: number): number {
  if (inputNumber === 2) {
    return 100;
  } else {
    // Calculate the result by subtracting 7 for each increase in the input number
    return 100 - 7 * (inputNumber - 2);
  }
}

function calculateMargin(inputNumber: number): number {
  if (inputNumber === 2) {
    return 12;
  } else {
    // Calculate the result by subtracting 7 for each increase in the input number
    return 12 - 1 * inputNumber;
  }
}

export default function Bomber({ numOfSquare, bombHit }: bomberProps) {
  return (
    <>
      <div className="bg-slate-900 rounded-xl shadow-inner shadow-slate-700">
        {bombHit && (
          <Image
            src="/bomb.svg"
            alt="bomb"
            width={calculateWh(numOfSquare)}
            height={calculateWh(numOfSquare)}
            className={`m-${calculateMargin(numOfSquare)}`}
          />
        )}
        {!bombHit && (
          <div className={`m-${calculateMargin(numOfSquare)}`}>
            <div
              className={`w-${calculateWh(numOfSquare)} h-${calculateWh(
                numOfSquare
              )}`}
            >
              <Image
                src="/kosong.png"
                alt="empty"
                width={calculateWh(numOfSquare)}
                height={calculateWh(numOfSquare)}
                className={`m-${calculateMargin(numOfSquare)}`}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
