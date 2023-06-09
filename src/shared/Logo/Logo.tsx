import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo.svg";
import logoLightImg from "images/logo-light.svg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 ${className}`}
    >
      {/* {img ? (
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )} */}
      <span className=" h-12 w-12 flex flex-row items-center justify-center bg-[#007cb0] rounded-full">
        <span className="font-semibold text-3xl">🎥</span>
      </span>
    </Link>
  );
};

export default Logo;
