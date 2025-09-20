"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/data/header";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary-100 rounded-2xl">
      <ul className="flex items-center p-[6px]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href} className="relative group">
              <Link
                href="#"
                className={`block py-[11px] px-[17px] rounded-2xl transition-colors
                ${
                  isActive
                    ? "bg-white shadow-2xl shadow-white/50"
                    : "hover:bg-primary-200"
                }
                `}
              >
                <Image
                  src={link.src}
                  alt={link.href}
                  className={` ${!isActive && "invert-0 dark:invert"}`}
                ></Image>
              </Link>

              {!isActive && (
                <span
                  role="tooltip"
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 text-xs font-medium
                text-black dark:text-white bg-primary-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
