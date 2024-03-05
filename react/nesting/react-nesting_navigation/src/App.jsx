import "./App.css";

import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link.jsx";
import Avatar from "./components/Avatar.jsx";
import Logo from "./components/Logo.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
