import Image from "next/image";

export const BCNCLogoWhite = () => {
  return (
    <Image src="/01-white-BCNC.png" alt="BCNC Logo" width={600} height={200} priority />
  );
};

export const BCNCLogoBlue = () => {
  return (
    <Image
      width={170}
      height={70}
      src="/01-blue-BCNC.png"
      alt="BCNC blue logo"
    />
  );
};
