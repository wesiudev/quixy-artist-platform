"use client";

import PrivacyPolicy from "@/views/landing/SocialMedia/PrivacyPolicy";
import { useState } from "react";

export default function PrivacyButton() {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div>
      {isPrivacyOpen && <PrivacyPolicy setOpen={setPrivacyOpen} />}{" "}
      <button
        onClick={() => setPrivacyOpen(!isPrivacyOpen)}
        className="mt-2 hover:text-green-300 xl:text-right"
      >
        Polityka prywatności
      </button>
    </div>
  );
}
