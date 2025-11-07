import styled from "@emotion/styled";

const SkeletonFormContainer = styled.div`
  margin: 0;
  max-width: 100%;
  transition: all 0.3s ease-in-out;
  padding: 16px;
  border-radius: 8px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(250, 250, 250, 0.2);
`;

const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
`;

const SkeletonTitle = styled.div`
  height: 24px;
  width: 70%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkeletonButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SkeletonButton = styled.div`
  height: 32px;
  width: 60px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: loading 1.5s infinite;
`;

const SkeletonDescription = styled.div`
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 8px;
  animation: loading 1.5s infinite;
`;

const SkeletonDescriptionDiv = ({ width }: { width?: string }) => {
  return <SkeletonDescription style={{ width: width || "80%" }} />;
};

export const SkeletonUrlItem = () => {
  return (
    <SkeletonFormContainer>
      <SkeletonHeader>
        <SkeletonTitle />
        <SkeletonButtonGroup>
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonButtonGroup>
      </SkeletonHeader>
      <SkeletonDescriptionDiv width="90%" />
      <SkeletonDescriptionDiv width="60%" />
      <SkeletonDescriptionDiv width="40%" />
    </SkeletonFormContainer>
  );
};
export const FormSkeleton = () => {
  return (
    <SkeletonFormContainer style={{ width: "70%", margin: "0 auto" }}>
      <SkeletonHeader>
        <SkeletonTitle />
        <SkeletonButtonGroup>
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonButtonGroup>
      </SkeletonHeader>
      <SkeletonDescriptionDiv width="90%" />
      <SkeletonDescriptionDiv width="60%" />
      <SkeletonDescriptionDiv width="40%" />
    </SkeletonFormContainer>
  );
};
