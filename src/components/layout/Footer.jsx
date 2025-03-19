import React from "react";
import SocialIcons from "../SocialIcons";

export default function Footer() {
  return (
    <footer className="h-20 w-full border-t border-border">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <small role="contentinfo">Copyright © 2025</small>
        <nav aria-label="社交媒体链接">
          <SocialIcons />
        </nav>
      </div>
    </footer>
  );
}
