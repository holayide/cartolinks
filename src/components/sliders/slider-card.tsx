import Image from "next/image";
import { SliderCardProps } from "../types";
import Button from "../buttons";

export default function SliderCard({ card }: SliderCardProps) {
  return (
    <div className="flex-shrink-0 w-[80%] md:w-[60%] rounded-xl overflow-hidden group">
      <div className="relative h-96">
        <Image
          src={card.image}
          alt="card"
          className="h-full object-cover"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent z-10" />
        <div className="w-full px-6 absolute bottom-6 text-white">
          <h2 className="text-base md:text-2xl mb-2">{card.subtitle}</h2>

          <div className="flex">
            <p className="text-[11px] mb-4 max-w-xs">{card.description}</p>
            <div className="ml-auto">
              <Button variant="secondary" className="text-sm">
                {card.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
