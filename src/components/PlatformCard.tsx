
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-xl p-6 backdrop-blur-sm border transition-colors cursor-pointer",
        "bg-white/80 border-gray-200 hover:bg-white/90 hover:border-gray-300",
        "dark:bg-gray-900/60 dark:border-gray-800 dark:hover:bg-gray-900/80 dark:hover:border-gray-700",
        "shadow-sm hover:shadow-md",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <img src={icon} alt={name} className="h-8 w-8 object-contain" />
        </div>
        <div>
          <h3 className="font-semibold text-lg tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground">{problemCount} problems</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{description}</p>
      
      {/* Hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

export default PlatformCard;
