"use client";

import { useState } from "react";
import { BCNCLogoWhite, Button, Container, Form, Preview } from "../components";
import { useToPng } from "../hooks/useToPng";

export default function Page() {
  const { imageData, onButtonClick, ref, setImageData } = useToPng();
  const [left, setLeft] = useState(0.00);

  return (
    <Container>
      <BCNCLogoWhite />
      <Form onChangeFallback={setImageData} />
      <Button onClickFallback={onButtonClick} />
      <Preview refObject={ref} imageData={imageData} testPosition={{ left }} />
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-between gap-5">
          <label htmlFor="top">LEFT</label>
          <input
            type="number"
            step="0.01"
            onChange={(e) => setLeft(parseFloat(e.target.value))}
            value={left}
            id="left"
          />
        </div>
      </div>
    </Container>
  );
}
