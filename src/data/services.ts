// This file is now deprecated - use config/index.ts instead
// Dynamic icon mapping for configuration
import { Printer, Wrench, Sparkles, Clock, Utensils, Store, Palette, Search, Target, Share2, BarChart3 } from "lucide-react";
import { config } from "@/config";

const iconMap = {
  Printer,
  Wrench,
  Sparkles,
  Clock,
  Utensils,
  Store,
  Palette,
  Search,
  Target,
  Share2,
  BarChart3,
};

export const services = config.services.items.map(service => ({
  icon: iconMap[service.icon as keyof typeof iconMap] || Printer,
  title: service.title,
  desc: service.description,
}));
