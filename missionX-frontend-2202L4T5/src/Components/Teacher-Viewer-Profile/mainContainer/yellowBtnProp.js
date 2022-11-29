import React from "react";

export default function YellowButton({
  backgroundColor,
  border,
  borderRadius,
  buttonText,
  color,
  height,
  margin,
  padding,
  width,
}) {
  return (
    <button
      style={{
        backgroundColor: "#e5ab2c",
        border: "2px solid #e5ab2c",
        borderRadius: "5px",
        color: "white",
        height: "35px",
        margin: "70px 50px 0px 1120px",
        padding: "5px 20px 10px 20px",
        width: "auto",
      }}
    >
      {buttonText}
    </button>
  );
}
