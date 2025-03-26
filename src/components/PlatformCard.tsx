
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, Zap } from "lucide-react";

interface PlatformCardProps {
  name: string;
  icon: string;
  description: string;
  problemCount: number;
  className?: string;
  onClick?: () => void;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  icon,
  description,
  problemCount,
  className,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-xl p-6 backdrop-blur-md border transition-all cursor-pointer group",
        "bg-gradient-to-br from-[#121212]/90 via-[#121212]/70 to-[#0D0D0D]/90",
        "border-[#00A8E8]/20 hover:border-[#00A8E8]/50",
        "shadow-lg hover:shadow-xl shadow-black/5 hover:shadow-[#00A8E8]/15",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/20">
          <img src={icon} alt={name} className="h-8 w-8 object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg tracking-tight text-[#E0E0E0] group-hover:text-white transition-colors">{name}</h3>
          <p className="text-sm text-[#BB86FC] flex items-center gap-1">
            <Zap className="h-3.5 w-3.5" />
            {problemCount} problems
          </p>
        </div>
        <ChevronRight className="h-5 w-5 text-[#00A8E8]/70 group-hover:text-[#00A8E8] transition-colors" />
      </div>
      <p className="mt-3 text-sm text-[#A0A0A0] group-hover:text-[#E0E0E0] transition-colors line-clamp-2">{description}</p>
      
      {/* Enhanced futuristic hover effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00A8E8]/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute -bottom-2 -right-2 h-24 w-24 bg-gradient-to-br from-[#00A8E8]/30 to-transparent rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -top-2 -left-2 h-20 w-20 bg-gradient-to-br from-[#BB86FC]/30 to-transparent rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMEE4RTgiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0zMCAzMGgzMHYzMEgzMHoiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIvPjxwYXRoIGQ9Ik0wIDBoMzB2MzBIMHoiLz48cGF0aCBkPSJNMzAgMGgzMHYzMEgzMHoiLz48L2c+PC9zdmc+')] opacity-5 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00A8E8]/50 animate-[scan_2s_linear_infinite]" />
      </div>

      {/* Digital counter effect */}
      <div className="absolute bottom-2 right-2 text-xs text-[#00A8E8]/70 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
        ID::{name.charCodeAt(0)}{name.length}{problemCount}
      </div>
    </motion.div>
  );
};

export default PlatformCard;
