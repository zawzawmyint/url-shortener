import styled from "@emotion/styled";

const Btn = styled.button`
  width: 100%;
  padding: 10px;
  border: 0px solid hotpink;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
const Inputt = styled.input`
  width: 100%;
  padding: 10px;
  border: 0px solid hotpink;
  border-radius: 10px;
  background-color: rgba(235, 235, 235, 1);
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
`;

const IN = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 50vh;
  max-width: 800px;
  width: 100%;
  margin: 50px auto;
  padding: 2rem;
`;

/// Components

export const Button = ({
  style,
  type,
  disabled = false,
  children,
  onClick,
  title,
}: {
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}) => {
  return (
    <Btn
      style={style}
      type={type || "submit"}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {children}
    </Btn>
  );
};
export const InputName = ({
  name,
  style,
}: {
  name: string;
  style?: React.CSSProperties;
}) => {
  return <IN style={style}>{name}</IN>;
};
export const Input = ({
  placeholder,
  onChange,
  value,
  type,
  required = false,
}: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  required?: boolean;
}) => {
  return (
    <Inputt
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

export const BaseContainer = ({ children }: { children: React.ReactNode }) => {
  return <Section>{children}</Section>;
};
