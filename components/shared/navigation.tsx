import { ChevronLeft, ChevronRight } from "lucide-react";

export function SliderButton() {
  return (
    <div className="flex items-center gap-2">
      <button className=" p-2 rounded-full">
        <ChevronLeft size={24} />
      </button>
      <button className="p-2 rounded-full">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
