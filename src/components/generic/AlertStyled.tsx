import React, { useLayoutEffect, useState } from "react";
import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
// Styled Components
const AlertContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ${(props: { type?: "success" | "error" | "warning" | "info" }) => {
    switch (props?.type || "info") {
      case "success":
        return `
          background-color: #d1fae5;
          border: 1px solid #6ee7b7;
          color: #065f46;
        `;
      case "error":
        return `
          background-color: #fee2e2;
          border: 1px solid #fca5a5;
          color: #991b1b;
        `;
      case "warning":
        return `
          background-color: #fef3c7;
          border: 1px solid #fcd34d;
          color: #92400e;
        `;
      case "info":
      default:
        return `
          background-color: #dbeafe;
          border: 1px solid #93c5fd;
          color: #1e40af;
        `;
    }
  }}
`;

const AlertIcon = styled.span`
  font-size: 20px;
  line-height: 1;
  flex-shrink: 0;
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertTitle = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 12px;
`;

const AlertMessage = styled.div`
  font-size: 12px;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  padding: 0;
  line-height: 1;
  transition: opacity 0.2s;
  padding: 4px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

// Alert Component
export default function Alert({
  type = "info",
  title,
  message,
  onClose,
}: {
  type?: string;
  title?: string;
  message?: string;
  onClose?: () => void;
}) {
  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  // Close alert after 3 seconds if onClose is provided
  useLayoutEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <AlertContainer type={type as "success" | "error" | "warning" | "info"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AlertIcon>
              {icons[type as "success" | "error" | "warning" | "info"]}
            </AlertIcon>
            {title && <AlertTitle>{title}</AlertTitle>}
          </div>
          {onClose && <CloseButton onClick={onClose}>×</CloseButton>}
        </div>
        <AlertContent>
          <AlertMessage>{message}</AlertMessage>
        </AlertContent>
      </AlertContainer>
    </Overlay>
  );
}
