"use client";
import { FormDescription, FormTitle } from "./UrlFormStyleds";
import Link from "next/link";
import { BaseContainer, Button } from "../generic/GenericStyles";
import { useRouter } from "next/navigation";
import UrlItem from "./UrlItem";
import { useState } from "react";
import Alert from "../generic/AlertStyled";

const UrlList = ({
  shorteneds,
}: {
  shorteneds: {
    shortCode: string;
    longUrl: string;
    createdAt: Date;
    clicks: number;
  }[];
}) => {
  const [alert, setAlert] = useState({
    type: "info",
    title: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const closeAlert = () => {
    setShowAlert(false);
    setAlert({ type: "", title: "", message: "" });
  };
  return (
    <BaseContainer>
      {/* list header  */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <FormTitle>Your shortened URLs</FormTitle>
          <FormDescription style={{ color: "white" }}>
            Here are your shortened URLs. Click on the link to redirect to the
            original URL.
          </FormDescription>
        </div>
        <Link href="/url-form">
          <Button
            type="submit"
            title="Create new URL"
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 1)",
            }}
          >
            ➕ Create new URL
          </Button>
        </Link>
      </div>

      {showAlert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={closeAlert}
        />
      )}

      {/* short url list  */}
      {shorteneds.length > 0 &&
        shorteneds.map((item) => (
          <UrlItem
            key={item.shortCode}
            item={item}
            setAlert={setAlert}
            setShowAlert={setShowAlert}
          />
        ))}

      {shorteneds?.length == 0 && (
        <FormDescription style={{ color: "yellow" }}>
          No shortened URLs found. Please create one.
        </FormDescription>
      )}
    </BaseContainer>
  );
};

export default UrlList;
