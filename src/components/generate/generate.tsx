import React from "react";
import { ChevronDown } from "lucide-react";

import Button from "../buttons";
import GenerateCards from "./generate-cards";

export default function Generate() {
  return (
    <div className="my-16 my-container">
      <div className="my-container-inner max-w-">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground">Generate</h3>
          <Button variant="outline" className="flex items-center gap-1">
            <ChevronDown size={16} />
            show all
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <GenerateCards />
        </div>
      </div>
    </div>
  );
}
