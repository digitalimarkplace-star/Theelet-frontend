import Image from "next/image";
import React from "react";

const WhatsAppChat = () => {
  return (
    <div
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}
    >
      <a
        href="https://wa.me/923352548913"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          width="60"
          height="60"
          alt="WhatsApp chat"
        />
      </a>
    </div>
  );
};

export default WhatsAppChat;
