"use client";

import "./Sidebar.css";
import Link from "next/link";
import { useModals } from "@/store/useModalsStore";
import { HEADER_LINKS_SIDEBAR } from "@/utils/constants";
import { usePathname } from "next/navigation";
import useNoScroll from "@/hooks/useNoScroll";

export default function Sidebar() {
  const { sidebar, closeSidebar } = useModals();
  const pathname = usePathname();

  useNoScroll(sidebar);

  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
      <nav className='sidebar__wrapper'>
        {HEADER_LINKS_SIDEBAR.map((item) => (
          <Link
            key={item.value}
            className={
              item.value === pathname
                ? "sidebar__link sidebar__link-active"
                : "sidebar__link"
            }
            href={item.value}
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
