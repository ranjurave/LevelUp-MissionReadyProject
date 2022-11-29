import React from "react";

export default function PinkButton({
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
        backgroundColor: "#f91c85",
        border: "2px solid #f91c85",
        borderRadius: "5px",
        color: "white",
        height: "35px",
        margin: "",
        padding: "5px 20px 10px 20px",
        width: "auto",
      }}
    >
      {buttonText}
    </button>
  );
}
