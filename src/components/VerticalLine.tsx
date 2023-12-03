import React, { useState } from "react";
import "./VerticalLine.css";

const VerticalLine: React.FC = (props: { setStep: any; step: number }) => {
  return (
    <div className="flex h-full justify-stretch hidemeonsmall">
      <div style={{ flex: 4 }} className="h-full">
        <ul className="flex flex-col h-full gap-12 py-32 mr-2">
          <li
            onClick={() => {}}
            className={
              props.step === 0
                ? "green-text"
                : props.step > 0
                ? "text-black"
                : "text-gray-400"
            }
          >
            Rodzaj metalu żyły przewodzącej
          </li>
          <li
            onClick={() => {}}
            className={
              props.step === 1
                ? "green-text"
                : props.step > 1
                ? "text-black"
                : "text-gray-400"
            }
          >
            Rodzaj tworzywa izolacyjnego i liczba żył obciążonych
          </li>
          <li
            onClick={() => {}}
            className={
              props.step === 2
                ? "green-text"
                : props.step > 2
                ? "text-black"
                : "text-gray-400"
            }
          >
            Sposób instalacji
          </li>
          <li
            onClick={() => {}}
            className={
              props.step === 3
                ? "green-text"
                : props.step > 3
                ? "text-black"
                : "text-gray-400"
            }
          >
            Temperatura otoczenia i rezystywność cieplna gruntu
          </li>
          <li
            onClick={() => {}}
            className={
              props.step === 4 || props.step === 5
                ? "green-text"
                : props.step > 5
                ? "text-black"
                : "text-gray-400"
            }
          >
            finalizacja
          </li>
          <li
            onClick={() => {}}
            className={
              props.step === 6
                ? "green-text"
                : props.step > 6
                ? "text-black"
                : "text-gray-400"
            }
          >
            Wynik
          </li>
        </ul>
      </div>
      <div className="relative h-full w-[144px] mr-24 shadow-xl vertical-line"></div>
    </div>
  );
};

export default VerticalLine;
