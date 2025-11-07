import React from "react";
import { Button } from "./GenericStyles";

const DeleteButton = ({
  handleDelete,
  shortCode,
}: {
  handleDelete: (shortCode: string) => void;
  shortCode: string;
}) => {
  return (
    <Button
      type="button"
      title="Delete URL"
      style={{
        padding: "5px",
        cursor: "pointer",
        borderRadius: "10px",
        backgroundColor: "red",
        width: "30px",
        height: "30px",
      }}
      onClick={() => handleDelete(shortCode)}
    >
      🗑️
    </Button>
  );
};

export default DeleteButton;
