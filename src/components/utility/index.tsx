import Image from "next/image";
import { utilityItem } from "@/data/header";
import { Bell } from "lucide-react";
import Button from "../buttons";
import ThemeToggle from "../provider/theme-toggle";

export default function Utility() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {utilityItem.map((item) => (
          <div
            key={`${item.label}s`}
            className="flex items-center gap-1 bg-primary-100 px-2 py-1 rounded-2xl"
          >
            <Image src={item.src} alt={item.label} width={15} height={15} />
            <span className="text-[10px] font-semibold">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button>
          <Bell fill="black" size={12} />
        </Button>

        <ThemeToggle />
      </div>

      <div className="size-6 flex rounded-full justify-center items-center shadow-black bg-gradient-to-b from-purple-300 from-20% to-blue-300 to-80%"></div>
    </div>
  );
}
