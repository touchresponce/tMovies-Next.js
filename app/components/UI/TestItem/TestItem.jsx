"use client";

import "./TestItem.css";
import Link from "next/link";
import Image from "next/image";

export default function TestItem({ data }) {
  const { id, backdrop, name, enName, alternativeName, logo } = data;

  console.log(logo);

  return (
    <div className='test-item noselect'>
      <Link href={`/room/${id}`}>
        {logo?.url !== null && (
          <div className='test-item__logo'>
            <Image
              src={logo?.url}
              alt={`логотип ${name || alternativeName || enName}`}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        )}
        {backdrop?.previewUrl && (
          <Image
            src={backdrop?.previewUrl}
            alt={`постер ${name || alternativeName || enName}`}
            fill
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Link>
    </div>
  );
}
