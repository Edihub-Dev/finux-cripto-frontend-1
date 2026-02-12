import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import { FaTelegramPlane } from "react-icons/fa";

function App() {
  return (
    <>
      <LandingPage />
      <a
        className="telegram-fab"
        href="https://t.me/Finuxofficiallive"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Join us on Telegram"
      >
        <FaTelegramPlane aria-hidden="true" />
      </a>
    </>
  );
}

export default App;
