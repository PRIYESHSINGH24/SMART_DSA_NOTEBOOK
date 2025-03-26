
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
        "bg-gradient-to-br from-white/80 via-white/50 to-white/20 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-800/20",
        "border-gray-200/50 hover:border-primary/50 dark:border-gray-700/50 dark:hover:border-primary/50",
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
        <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{description}</p>
      
      {/* Futuristic hover effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute -bottom-1 -right-1 h-16 w-16 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -top-1 -left-1 h-16 w-16 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export default PlatformCard;
