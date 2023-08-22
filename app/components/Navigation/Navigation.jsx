"use client";

import "./Navigation.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  const test = [
    { title: "Главная", link: "/" },
    { title: "Фильмы", link: "/movie" },
    { title: "Сериалы", link: "/tv-series" },
    { title: "Мультфильмы", link: "/cartoon" },
    { title: "Аниме", link: "/anime" },
  ];

  return (
    <nav className='navigation'>
      {test.map((item) => (
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
  );
}
