import React, { useState } from 'react';
import './VerticalLine.css';

const VerticalLine: React.FC = (props: {setStep: any, step:number}) => {

  return <div className="flex justify-stretch h-full">
    <div style={{ flex: 4 }} className="h-full">
        <ul className="flex flex-col justify-evenly h-full py-32">
            <li onClick={() => {
                }}
                className={props.step === 0 ? "green-text" : props.step > 0 ? "text-black" : "text-gray-400"}
                >
                Rodzaj metalu żyły przewodzącej
            </li>
            <li onClick={() => {
                }}
                className={props.step === 1 ? "green-text" : props.step > 1 ? "text-black" : "text-gray-400"}
                >
                Rodzaj tworzywa izolacyjnego
            </li>
            <li onClick={() => {
                }}
                className={props.step === 2 ? "green-text" : props.step > 2 ? "text-black" : "text-gray-400"}
                >
                Liczba żył obciążonych
            </li>
            <li onClick={() => {
                }}
                className={props.step === 3 ? "green-text" : props.step > 3 ? "text-black" : "text-gray-400"}
                >
                Sposób instalacji
            </li>
            <li onClick={() => {
                }}
                className={props.step === 4 ? "green-text" : props.step > 4 ? "text-black" : "text-gray-400"}
                >
                Temperatura otoczenia
            </li>
            <li onClick={() => {
                }}
                className={props.step === 5 ? "green-text" : props.step > 5 ? "text-black" : "text-gray-400"}
                >
                Rezystywność cieplna gruntu
                w jednostce
            </li>
            <li onClick={() => {
                }}
                className={props.step === 6 ? "green-text" : props.step > 6 ? "text-black" : "text-gray-400"}
                >
                Wynik
            </li>
        </ul>
    </div>
    <div style={{ flex: 2 }} className="vertical-line shadow-xl relative h-full mr-24"></div>
  </div>;
};

export default VerticalLine;