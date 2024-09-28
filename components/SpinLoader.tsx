import React from "react";
import LoaderAnimation from "./LoaderAnimation";

function SpinLoader() {
  return (
    <LoaderAnimation
      className="fixed top-0 left-0 w-full h-full z-40 dark:bg-[#acabab]"
      style={{ backgroundColor: "#acabab", opacity: 0.3 }}
      type="roundLoading"
      animationStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120px",
        height: "120px",
      }}
    />
  );
}

export default SpinLoader;
