import { generateTools } from "@/data/generate";
import Button from "../buttons";
import Image from "next/image";

export default function GenerateCards() {
  return (
    <>
      {generateTools.map((tool, index) => (
        <div key={index} className="cursor-pointer">
          <div className="">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="relative aspect-square rounded-[10px] shrink-0"
                style={{
                  background: tool.gradient,
                  width: "42px",
                  height: "42px",
                }}
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  className="w-full h-full object-contain p-2 invert"
                />
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <h4 className="text-sm font-bold mb-0.5 text-foreground">
                    {tool.name}
                    {tool.isNew && (
                      <span className="px-1 py-0.5 text-[10px] ml-1.5 font-normal bg-blue-500 text-white rounded-3xl">
                        New
                      </span>
                    )}
                  </h4>

                  <p className="text-xs text-gray-600 dark:text-gray-500  mb-2 leading-3.5">
                    {tool.description}
                  </p>
                </div>

                <Button variant="teriary" className="">
                  Open
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
