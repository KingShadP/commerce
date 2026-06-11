import { ShoppingBag } from "lucide-react";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className={clsx("relative p-2 rounded-full hover:bg-white/5 hover:text-white transition-all cursor-pointer", className)}>
      <ShoppingBag className="w-4 h-4 text-skims-accent" />
      {quantity ? (
        <span className="absolute -top-0.5 -right-0.5 bg-[#C5A880] text-black text-[7.5px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold border border-[#0B0A09]">
          {quantity}
        </span>
      ) : null}
    </div>
  );
}
