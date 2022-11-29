import React from "react";

function PrimaryButton({
  backgroundColor,
  border,
  borderRadius,
  buttonText,
  height,
  margin,
  padding,
  width,
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: "white",
          border: "2px solid #43C0F6",
          borderRadius: "9px",
          boxShadow: "0px 3px 3px #00000029",
          height: "35px",
          margin: "20px 93px",
          padding: "0px",
          width: "175px",
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

export default PrimaryButton;
