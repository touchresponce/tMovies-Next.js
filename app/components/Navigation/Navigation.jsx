"use client";

import "./Navigation.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "@/utils/constants";
import BurgerButton from "../UI/BurgerButton/BurgerButton";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <nav className='navigation'>
        {HEADER_LINKS.map((item) => (
          <Link
            key={item.link}
            className={
              item.link === pathname
                ? "navigation__link navigation__link-active"
                : "navigation__link"
            }
            href={item.link}
          >
            {item.title}
            <span className='navigation__link-span' />
          </Link>
        ))}
      </nav>
      <BurgerButton />
    </>
  );
}
