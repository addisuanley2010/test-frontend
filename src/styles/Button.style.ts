import styled from "styled-components";

interface ButtonProps {
        bg?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px ;
  margin: 0 10px 0px 0px;

  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) => props.bg || "#007bff"};
  cursor: pointer;
 @media (max-width: 768px) {
      font-size: 10px;
      margin: 0px;
      width: 70px;
  }
  &:hover {
    background-color: ${(props) => props.bg ? props.bg : "#0069d9"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`;