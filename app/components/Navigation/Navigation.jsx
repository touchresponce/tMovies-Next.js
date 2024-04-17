"use client";

import "./Navigation.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS_MAIN } from "@/utils/constants";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <nav className='navigation'>
        {HEADER_LINKS_MAIN.map((item) => (
          <Link
            key={item.value}
            className={
              item.value === pathname
                ? "navigation__link navigation__link-active"
                : "navigation__link"
            }
            href={item.value}
          >
            {item.title}
            <span className='navigation__link-span' />
          </Link>
        ))}
      </nav>
    </>
  );
}
