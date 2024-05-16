import { toPng } from "html-to-image";
import React from "react";

export const useToPng = () => {
  const [imageData, setImageData] = React.useState({
    name: "",
    position: "",
    department: "",
  });
  const ref = React.useRef<HTMLDivElement>(null);

  const onButtonClick = React.useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { pixelRatio: 2.5 })
      .then((dataUrl) => {
        const nameNormalized = imageData.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const link = document.createElement("a");
        link.download = `${nameNormalized}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  }, [ref, imageData]);

  return {
    ref,
    imageData,
    setImageData,
    onButtonClick,
  };
};
