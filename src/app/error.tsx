"use client"; // Error boundaries must be Client Components

import { BaseContainer, Button } from "@/components/generic/GenericStyles";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <BaseContainer>
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        style={{ width: "20%" }}
      >
        Try again
      </Button>
    </BaseContainer>
  );
}
