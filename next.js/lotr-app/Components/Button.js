import styled from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const StyledButton = styled.button`
  background-color: #6c757d;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-family: ${lora.style.fontFamily}, serif;
`;
