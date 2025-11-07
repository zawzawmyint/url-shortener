import React from "react";
import { Button, Input, InputName } from "../generic/GenericStyles";

const UrlFormRenderArea = ({
  loading,
  url,
  setUrl,
}: {
  loading: boolean;
  url: string;
  setUrl: (url: string) => void;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <InputName name="Long URL" style={{ marginBottom: "-5px" }} />
      <Input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Long URL"
        required
      />
      <Button
        type="submit"
        disabled={loading}
        title="Shorten URL"
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        {loading ? "Shortening..." : "Shorten"}
      </Button>{" "}
    </div>
  );
};

export default UrlFormRenderArea;
