import { BookCopy, CreditCard } from "lucide-react";
import Image from "next/image";

import mobbin from "@/assets/mobbin-logo.svg";
import logo from "@/assets/logo.svg";
import Button from "../buttons";

export default function Footer() {
  return (
    <footer>
      <div className="my-container">
        <div className="my-container-inner flex items-center justify-between">
          <h4>Gallery</h4>
          <div className="flex items-center text-sm">
            <Button
              variant="teriary"
              className="py-1.5 flex items-center gap-1.5"
            >
              <BookCopy size={15} />
              <span className="text-xs font-medium">Legal</span>
            </Button>
            <span className="font-semibold text-blue-600">r</span>
            <Button
              variant="teriary"
              className="py-1.5 flex items-center gap-1.5"
            >
              <CreditCard size={15} />
              <span className="text-xs font-medium">Pricing</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-3 bg-black/80 my-container">
        <div className="my-container-inner flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-black px-0.5 py-1 rounded-lg">
              <Image src={logo} alt="logo" className="invert"></Image>
            </div>
            <span className="text-xl text-white">Krea AI</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white text-sm font-semibold">curated by</span>
            <Image
              src={mobbin}
              alt="mobbin logo"
              className="w-32 invert"
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
}
