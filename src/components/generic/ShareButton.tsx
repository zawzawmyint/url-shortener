import React from "react";
import { Button } from "./GenericStyles";

const ShareButton = ({
  socialMedia,
  onShareClick,
  color,
}: {
  socialMedia: string;
  onShareClick: () => void;
  color: string;
}) => {
  return (
    <Button
      type="button"
      title={`Share on ${socialMedia}`}
      style={{
        padding: "5px",
        cursor: "pointer",
        borderRadius: "10px",
        backgroundColor: color,
        width: "30px",
        height: "30px",
      }}
      onClick={() => onShareClick()}
    >
      {socialMedia === "linkedin" ? "Ln" : "Fb"}
    </Button>
  );
};

export default ShareButton;
