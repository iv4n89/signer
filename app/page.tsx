"use client";

import { toPng, toJpeg } from "html-to-image";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const baseColor = "#142e53";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: "400",
});

const montserratBold = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: "600",
});

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [imageData, setImageData] = React.useState({
    name: "",
    position: "",
    department: "",
  });

  const onButtonClick = React.useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { pixelRatio: 2.5 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  }, [ref]);

  return (
    <div className="flex justify-center items-center flex-col gap-3 container">
      <div className="flex flex-col w-full gap-10 items-center pb-10 formContainer">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            onChange={(e) =>
              setImageData({
                ...imageData,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="position">Posicion</label>
          <input
            type="text"
            id="position"
            onChange={(e) =>
              setImageData({
                ...imageData,
                position: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="department">Departamento</label>
          <input
            type="text"
            id="department"
            onChange={(e) =>
              setImageData({
                ...imageData,
                department: e.target.value,
              })
            }
          />
        </div>
      </div>
      <button
        onClick={onButtonClick}
        className="border border-sky-500 px-36 py-2 rounded-3xl text-2xl hover:bg-sky-500 transition-all duration-300 ease-in-out mb-4"
      >
        Generar y Descargar Firma
      </button>
      <div className="flex justify-center">
        <div ref={ref} className="flex gap-10 h-20 bg-white imageContainer">
          <div className="pt-1 logoPosition">
            <Image
              width={170}
              height={70}
              src="/01-blue-BCNC.png"
              alt="My Image"
            />
          </div>
          <div className="flex-1 textPosition lineHeight">
            <h1 className={`${montserratBold.className} nameText`}>
              {imageData.name}
            </h1>
            <p className={`${montserrat.className} positionText`}>
              {imageData.position}
            </p>
            <p className={`${montserrat.className} departmentText`}>
              {imageData.department}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
