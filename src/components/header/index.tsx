import Image from "next/image";
import { ChevronDown } from "lucide-react";

import logo from "@/assets/logo.svg";
import Utility from "../utility";
import NavBar from "../navbar";

export default function Header() {
  return (
    <header className="my-container pt-6 lg:pt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="logo"
            className="text-white invert-0 dark:invert"
          />
          <div className="flex items-center gap-2">
            <div className="size-6 flex rounded-full justify-center items-center shadow-black bg-gradient-to-b from-purple-200 from-20% to-blue-200 to-80%"></div>
            <span className="text-sm text-gray-500 dark:text-white font-semibold">
              benevolentnimblebat
            </span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="hidden lg:block">
          <NavBar />
        </div>

        <div className="hidden md:block">
          <Utility />
        </div>
      </div>
    </header>
  );
}
