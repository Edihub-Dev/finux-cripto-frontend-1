import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import { useEffect } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function App() {
  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia?.("(max-width: 768px)").matches;

    const hasTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (!isMobile || !hasTouch) return;

    let startY: number | null = null;
    let hasReloaded = false;

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const y = event.touches[0]?.clientY ?? 0;

      if (y <= 70) {
        startY = y;
        hasReloaded = false;
      } else {
        startY = null;
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (startY == null || hasReloaded) return;
      if (event.touches.length !== 1) return;

      const currentY = event.touches[0]?.clientY ?? 0;
      const delta = currentY - startY;

      if (delta > 110) {
        hasReloaded = true;
        window.location.reload();
      }
    };

    const onTouchEnd = () => {
      startY = null;
      hasReloaded = false;
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

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
