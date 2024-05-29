import { Montserrat } from "next/font/google";
import { BCNCLogoBlue } from "./bcnc-logo";
import {
  getXTranslateMagicForPosition,
  getXTranslateNumber,
} from "../lib/letterCombinationPaddings";

interface Props {
  refObject: React.RefObject<HTMLDivElement>;
  imageData: {
    name: string;
    position: string;
    department: string;
  };
  justifyPosition?: {
    top?: number;
    left?: number;
  };
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: "400",
});

export const Preview = ({ imageData, refObject, justifyPosition }: Props) => {
  const nameJustifyPosition = getXTranslateNumber(imageData?.name);

  return (
    <div className="flex justify-center">
      <div
        ref={refObject}
        className="flex gap-10 h-20 bg-white imageContainer px-3"
      >
        <div className="h-full flex items-center">
          <BCNCLogoBlue />
        </div>
        <div className="flex-1 lineHeight relative">
          <div className="absolutePosition">
            <h1
              className={`${montserrat.className} nameText`}
              style={{
                transform: `translateX(${
                  !!justifyPosition?.left && justifyPosition.left !== 0
                    ? justifyPosition?.left
                    : nameJustifyPosition
                }em)`,
              }}
            >
              {imageData.name}
            </h1>
            <p
              className={`${montserrat.className} positionText`}
              style={{
                transform: `translateX(${getXTranslateMagicForPosition(
                  imageData.position
                )}em)`,
              }}
            >
              {imageData.position}
            </p>
            <p
              className={`${montserrat.className} departmentText`}
              style={{
                transform: `translateX(${getXTranslateMagicForPosition(
                  imageData.department
                )}em)`,
              }}
            >
              {imageData.department}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
