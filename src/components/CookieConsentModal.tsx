import { useEffect, useRef, useState } from "react";
import styles from "./CookieConsentModal.module.css";

const STORAGE_KEY = "cookie-consent-choice";

type ConsentChoice = "accepted" | "rejected";

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export default function CookieConsentModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const existingChoice = window.localStorage.getItem(STORAGE_KEY);
    if (!existingChoice) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open || !dialogRef.current) return;

    previousFocused.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = getFocusableElements(dialogRef.current);
    const first = focusable[0];
    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        handleChoice("rejected");
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = getFocusableElements(dialogRef.current);
      if (items.length === 0) return;

      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previousFocused.current?.focus();
    };
  }, [open]);

  function handleChoice(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className={styles.backdrop}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        aria-describedby="cookie-modal-description"
        ref={dialogRef}
      >
        <h2 id="cookie-modal-title">Cookie Preferences</h2>
        <p id="cookie-modal-description">
          We use essential and analytics cookies to improve this website
          experience. You can accept or reject analytics cookies.
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={() => handleChoice("rejected")}>
            Reject
          </button>
          <button
            type="button"
            className={styles.primary}
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
