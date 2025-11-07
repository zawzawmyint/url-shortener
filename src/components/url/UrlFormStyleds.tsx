/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const bounce = keyframes`
  from, 20%, 53%, 60%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }

  70% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0,-1px,0);
  }
`;

const bounceAnimation = css`
  animation: ${bounce} 3s ease-in-out infinite;
`;

const Container = styled.section`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(250, 250, 250, 0.2);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(6px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const H1 = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const Label = styled.label`
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
`;
/// Components

export const FormContainer = ({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  return <Container style={style}>{children}</Container>;
};

export const FormTitle = ({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  return <H1 style={style}>{children}</H1>;
};

export const FormDescription = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <Label style={style}>{children}</Label>;
};

export const BounceDiv = ({ children }: { children: React.ReactNode }) => {
  return <div css={bounceAnimation}>{children}</div>;
};
