import { Montserrat } from "next/font/google";
import { BCNCLogoBlue } from "./bcnc-logo";

interface Props {
  refObject: React.RefObject<HTMLDivElement>;
  imageData: {
    name: string;
    position: string;
    department: string;
  };
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: "400",
});

export const Preview = ({ imageData, refObject }: Props) => {
  return (
    <div className="flex justify-center">
      <div ref={refObject} className="flex gap-10 h-20 bg-white imageContainer px-3">
        <div className="h-full flex items-center">
          <BCNCLogoBlue />
        </div>
        <div className="flex-1 lineHeight relative">
          <div className="absolutePosition">
            <h1 className={`${montserrat.className} nameText`}>
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
};
