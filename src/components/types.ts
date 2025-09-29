import { StaticImageData } from "next/image";

export interface SliderNavigationProps {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  currentSlide: number;
  maxSlide: number;
}

export interface SliderCardProps {
  card: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: StaticImageData;
  };
}
