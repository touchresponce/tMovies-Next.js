"use client";

import "./Sidebar.css";
import Link from "next/link";
import { useModals } from "@/store/useModalsStore";
import { HEADER_LINKS } from "@/utils/constants";
import { usePathname } from "next/navigation";
import useNoScroll from "@/hooks/useNoScroll";

export default function Sidebar() {
  const { sidebar, closeSidebar } = useModals();
  const pathname = usePathname();

  useNoScroll(sidebar);

  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
      <nav className='sidebar__wrapper'>
        {HEADER_LINKS.map((item) => (
          <Link
            key={item.link}
            className={
              item.link === pathname
                ? "sidebar__link sidebar__link-active"
                : "sidebar__link"
            }
            href={item.link}
            onClick={() => closeSidebar()}
          >
            {item.title}
            <span className='sidebar__link-span' />
          </Link>
        ))}
      </nav>
    </div>
  );
}
