import React, { useState } from "react";
import {
  BounceDiv,
  FormContainer,
  FormDescription,
  FormTitle,
} from "./UrlFormStyleds";
import Link from "next/link";
import DeleteButton from "../generic/DeleteButton";
import CopyButton from "../generic/CopyButton";
import { Button } from "../generic/GenericStyles";
import ShareButton from "../generic/ShareButton";
import UrlFormRenderArea from "./UrlFormRenderArea";
import { useRouter } from "next/navigation";
import { deleteShortenUrl, updateShortenUrl } from "@/service/endpoints";
import Alert from "../generic/AlertStyled";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const UrlItem = ({
  item,
  setAlert,
  setShowAlert,
}: {
  item: { shortCode: string; longUrl: string; createdAt: Date; clicks: number };
  setAlert: (alert: { type: string; title: string; message: string }) => void;
  setShowAlert: (show: boolean) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [longUrl, setLongUrl] = useState(item.longUrl);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle edit click
  const handleEdit = async (shortCode: string) => {
    try {
      setLoading(true);
      await updateShortenUrl(shortCode, longUrl);
      router.refresh();
      setAlert({
        type: "success",
        title: "Success",
        message: "URL updated successfully",
      });
      setShowAlert(true);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating shortened URL:", error);
      // Show error message
      setAlert({
        type: "error",
        title: "Error",
        message: "Failed to update URL. Please try again.",
      });
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete click
  const handleDelete = async (shortCode: string) => {
    try {
      await deleteShortenUrl(shortCode);
      router.refresh();
      setTimeout(() => {
        setAlert({
          type: "success",
          title: "Success",
          message: "URL deleted successfully",
        });
        setShowAlert(true);
      }, 1000);
    } catch (error) {
      console.error("Error deleting shortened URL:", error);
      // Show error message
      setAlert({
        type: "error",
        title: "Error",
        message: "Failed to delete URL. Please try again.",
      });
      setShowAlert(true);
    }
  };

  // Handle share click
  const shareOnSocialMedia = (
    shortCode: string,
    platform: "facebook" | "linkedin"
  ) => {
    const shortUrl = `${baseUrl}/${shortCode}`;
    const encodedUrl = encodeURIComponent(shortUrl);

    // Facebook Share dialog - only accepts 'u' parameter for URL
    if (platform === "facebook") {
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      window.open(
        facebookShareUrl,
        "facebook-share-dialog",
        "width=800,height=600"
      );
    } else if (platform === "linkedin") {
      const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      window.open(
        linkedInShareUrl,
        "linkedin-share-dialog",
        "width=800,height=600"
      );
    }
  };

  return (
    <FormContainer
      key={item.shortCode}
      style={{
        margin: 0,
        maxWidth: "100%",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* header section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <FormTitle
          style={{
            textDecoration: "underline",
            width: "70%" /* Or any other fixed width */,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <Link href={`/${item.shortCode}`} target="_blank">
            {item.longUrl}
          </Link>
        </FormTitle>

        {/* share and delete buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <BounceDiv>
            <ShareButton
              socialMedia="facebook"
              onShareClick={() =>
                shareOnSocialMedia(item.shortCode, "facebook")
              }
              color="blue"
            />
          </BounceDiv>
          <ShareButton
            socialMedia="linkedin"
            onShareClick={() => shareOnSocialMedia(item.shortCode, "linkedin")}
            color="darkblue"
          />
          <DeleteButton
            handleDelete={handleDelete}
            shortCode={item.shortCode}
          />
          <Button
            onClick={() => setIsEditing(!isEditing)}
            style={{
              padding: "5px",
              cursor: "pointer",
              borderRadius: "10px",
              width: "30px",
              height: "30px",
            }}
          >
            {isEditing ? "❌" : "📰"}
          </Button>
        </div>
      </div>

      {/*  Alert component to show success or error messages */}

      {/* URL details */}
      <FormDescription style={{ color: item.clicks > 0 ? "yellow" : "white" }}>
        <Link
          href={`/${item.shortCode}`}
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          {process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/
          {item.shortCode}
        </Link>{" "}
        <CopyButton shortCode={item.shortCode} />
      </FormDescription>

      <FormDescription style={{ color: "skyblue" }}>
        📅 {item.createdAt.toLocaleDateString()}
      </FormDescription>
      <FormDescription style={{ color: "skyblue" }}>
        🔗 {item.clicks}
      </FormDescription>
      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(item.shortCode);
          }}
        >
          <UrlFormRenderArea
            loading={loading}
            url={longUrl}
            setUrl={setLongUrl}
          />
        </form>
      )}
    </FormContainer>
  );
};

export default UrlItem;
