
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

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
        "relative overflow-hidden rounded-xl p-6 backdrop-blur-md border transition-all cursor-pointer",
        "bg-gradient-to-br from-background/90 via-background/70 to-background/50",
        "border-primary/20 hover:border-primary/50",
        "shadow-lg hover:shadow-xl shadow-black/5 hover:shadow-primary/10",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
          <img src={icon} alt={name} className="h-8 w-8 object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground">{problemCount} problems</p>
        </div>
        <ChevronRight className="h-5 w-5 text-primary/50" />
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{description}</p>
      
      {/* Futuristic hover effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute -bottom-1 -right-1 h-20 w-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -top-1 -left-1 h-16 w-16 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/30 animate-[scan_2s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default PlatformCard;
