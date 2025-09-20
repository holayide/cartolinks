import media from "@/assets/media.svg";
import video from "@/assets/video.svg";
import realtime from "@/assets/realtime.svg";
import enhancer from "@/assets/enhancer.svg";
import edit from "@/assets/edit.svg";
import mic from "@/assets/mic.svg";
import person from "@/assets/person.svg";

export const generateTools = [
  {
    name: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    isNew: true,
    src: media,
    gradient: "linear-gradient(0deg, rgb(208,227,241) 0%, rgb(41,73,98) 100%)",
  },
  {
    name: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more",
    isNew: false,
    src: video,
    gradient: "oklch(0.79550 0.1875 75.3501)",
  },
  {
    name: "RealTime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    isNew: false,
    src: realtime,
    gradient:
      "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)",
  },
  {
    name: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k.",
    isNew: true,
    src: enhancer,
    gradient: "linear-gradient(0deg, rgb(136, 136, 136) 0%, rgb(0, 0, 0) 100%)",
  },
  {
    name: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    isNew: true,
    src: edit,
    gradient:
      "linear-gradient(0deg, rgb(174, 145, 202) 0%, rgb(89, 42, 133) 60%, rgb(24, 7, 40) 100%)",
  },
  {
    name: "Video Upscale",
    description: "Lip Sync any video to any audio",
    isNew: true,
    src: mic,
    gradient: "linear-gradient(0deg, #BBCA91 0%, #3C878F 60%, #07280F 100%)",
  },
  {
    name: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    isNew: true,
    src: person,
    gradient: "#1B1C1D",
  },
  {
    name: "Train",
    description: "Teach krea to replicate yout style, products or characters.",
    isNew: false,
    src: edit,
    gradient: "#1B1C1D",
  },
];
