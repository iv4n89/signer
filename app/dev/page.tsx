"use client";

import { useState } from "react";
import { BCNCLogoWhite, Button, Container, Form, Preview } from "../components";
import { useToPng } from "../hooks/useToPng";

export default function Page() {
  const { imageData, onButtonClick, ref, setImageData } = useToPng();
  const [left, setLeft] = useState(0.0);

  return (
    <Container>
      <BCNCLogoWhite />
      <Form onChangeFallback={setImageData} />
      <Button onClickFallback={onButtonClick} />
      <Preview refObject={ref} imageData={imageData} justifyPosition={{ left }} />
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
      <div className="flex items-center pb-10 relative" style={{ scale: "300%", transform: 'translateY(50px)' }}>
        <Preview
          refObject={undefined}
          imageData={imageData}
          justifyPosition={{ left }}
        />
        <div style={{ width: '1px', height: '60%', backgroundColor: 'red', left: '49.15%'}} className="absolute"></div>
      </div>
    </Container>
  );
}
