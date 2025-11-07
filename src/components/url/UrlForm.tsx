"use client";

import { createShortenUrl } from "@/service/endpoints";
import { useState } from "react";
import {
  BaseContainer,
  Button,
  Input,
  InputName,
} from "../../components/generic/GenericStyles";
import {
  FormContainer,
  FormDescription,
  FormTitle,
} from "../../components/url/UrlFormStyleds";
import Link from "next/link";
import CopyButton from "@/components/generic/CopyButton";
import UrlFormRenderArea from "./UrlFormRenderArea";
import Alert from "../generic/AlertStyled";

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [createdAt, setCreatedAt] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createShortenUrl(url);
      setShortUrl(data.shortUrl);
      setCreatedAt(data.createdAt);
      setAlert({
        type: "success",
        title: "Success",
        message: "URL shortened successfully!",
      });
      setShowAlert(true);
    } catch (error) {
      console.error(error);
      setAlert({
        type: "error",
        title: "Error",
        message: error instanceof Error ? error.message : "Unknown error",
      });
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseContainer>
      {showAlert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
      <FormContainer>
        {/* form content */}
        <FormTitle>URL Shortener</FormTitle>
        <FormDescription>Enter a long URL to shorten it.</FormDescription>

        <form onSubmit={handleSubmit}>
          <UrlFormRenderArea loading={loading} url={url} setUrl={setUrl} />
        </form>
      </FormContainer>

      {/* short url content */}
      {shortUrl ? (
        <FormContainer>
          <FormTitle> Your link is ready! </FormTitle>
          <FormDescription>Copy the link below to share it.</FormDescription>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FormDescription style={{ textDecoration: "underline" }}>
              <Link href={shortUrl} target="_blank" rel="noopener noreferrer">
                {process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/
                {shortUrl}
              </Link>
            </FormDescription>
            <CopyButton shortCode={shortUrl} />
          </div>
          <FormDescription style={{ color: "skyblue" }}>
            Created at: {new Date(createdAt).toLocaleDateString()}
          </FormDescription>
        </FormContainer>
      ) : (
        <FormContainer>
          <FormDescription style={{ color: "skyblue" }}>
            Shorten URL will be available here after submission.
          </FormDescription>
        </FormContainer>
      )}
    </BaseContainer>
  );
}
