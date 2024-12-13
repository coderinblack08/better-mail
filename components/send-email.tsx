"use client";

import { useState } from "react";

export default function SendEmail() {
  const [status, setStatus] = useState<string>("");

  const handleSendEmail = async () => {
    try {
      const response = await fetch("/api/mail/send", {
        method: "POST",
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email");
      }
    } catch (error) {
      setStatus("Error sending email");
    }
  };

  return (
    <div>
      <button onClick={handleSendEmail}>Send Test Email</button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}
