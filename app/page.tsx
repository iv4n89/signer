"use client";

import { BCNCLogoWhite, Button, Container, Form, Preview } from "./components";
import { useToPng } from "./hooks/useToPng";

export default function Home() {
  const { imageData, onButtonClick, ref, setImageData } = useToPng();

  return (
    <Container>
      <BCNCLogoWhite />
      <Form onChangeFallback={setImageData} />
      <Button onClickFallback={onButtonClick} />
      <Preview refObject={ref} imageData={imageData} />
    </Container>
  );
}
