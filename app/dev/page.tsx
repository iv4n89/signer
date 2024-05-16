"use client";

import { useState } from "react";
import { BCNCLogoWhite, Button, Container, Form, Preview } from "../components";
import { useToPng } from "../hooks/useToPng";

export default function Page() {
  const { imageData, onButtonClick, ref, setImageData } = useToPng();
  const [top, setTop] = useState(12);
  const [left, setLeft] = useState(0);

  return (
    <Container>
      <BCNCLogoWhite />
      <Form onChangeFallback={setImageData} />
      <Button onClickFallback={onButtonClick} />
      <Preview
        refObject={ref}
        imageData={imageData}
        testPosition={{ left, top }}
      />
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-between gap-5">
          <label htmlFor="top">TOP</label>
          <input
            type="number"
            onChange={(e) => setTop(parseInt(e.target.value))}
            value={top}
            id="top"
          />
        </div>
        <div className="flex justify-between gap-5">
          <label htmlFor="top">LEFT</label>
          <input
            type="number"
            onChange={(e) => setLeft(parseInt(e.target.value))}
            value={left}
            id="left"
          />
        </div>
      </div>
    </Container>
  );
}
