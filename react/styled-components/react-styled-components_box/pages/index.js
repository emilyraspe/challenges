import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledHomePage>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack />
      <BoxWithStyledComponents />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
display: flex;
justify-content: center;
}
`;
