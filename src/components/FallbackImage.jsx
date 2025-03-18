"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function FallbackImage({
  src,
  fallbackSrc = "/default-avatar.jpg",
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
