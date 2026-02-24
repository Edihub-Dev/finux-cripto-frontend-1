import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <LandingPage />
      <a
        className="whatsapp-fab"
        href="https://whatsapp.com/channel/0029Vb7UDolKWEKzlCe5dF30"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Join us on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
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
