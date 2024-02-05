import Header from "./components/Header";
import "./styles.css";
import Navigation from "./components/Navigation";
import Links from "./components/Links";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Links href="#">
          <Logo />
        </Links>
        <Navigation>
          <Links href="#home">Home</Links>
          <Links href="#about">About</Links>
          <Links href="#impressum">Impressum</Links>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
