import React, { useState } from "react";
import { Button } from "./GenericStyles";

const CopyButton = ({ shortCode }: { shortCode: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (shortCode: string) => {
    navigator.clipboard.writeText(shortCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={() => handleCopy(shortCode)}
      style={{
        padding: "8px 16px",
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        cursor: "pointer",
        width: "70px",
      }}
      title="Copy to clipboard"
    >
      {copied ? "✅" : "Copy"}
    </Button>
  );
};

export default CopyButton;
