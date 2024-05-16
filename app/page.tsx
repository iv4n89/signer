"use client";

import { BCNCLogoWhite, Button, Form, Preview } from "./components";
import { useToPng } from "./hooks/useToPng";

export default function Home() {
  const { imageData, onButtonClick, ref, setImageData } = useToPng();

  return (
    <div className="flex justify-center items-center flex-col gap-3 container">
      <BCNCLogoWhite />
      <Form onChangeFallback={setImageData} />
      <Button onClickFallback={onButtonClick} />
      <Preview refObject={ref} imageData={imageData} />
    </div>
  );
}
