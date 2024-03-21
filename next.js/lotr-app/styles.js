import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`
  *{
    margin: 0;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${lora.style.fontFamily}, serif;
    background-color: #212529;
    color: #adb5bd;
    padding: 25px;
  }
  h1,h2,h3,h4,h5,h5 {
    color: #dee2e6;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  h1 {
    font-size: 2.5em;
    padding-bottom: 15px;
  }
  a {
    color: #dee2e6;
    text-decoration: none;
  }

  li {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    padding-bottom: 15px;

  }

  ul {
    padding: 0px;
    margin: 0px;
  }


`;
