import { IndustryConfig } from "@/types/config";
import { retailBrandingConfig } from "./industries/retail-branding";
import { restaurantConfig } from "./industries/restaurant";
import { digitalMarketingConfig } from "./industries/digital-marketing";

// Available industry configurations
export const industryConfigs = {
  "retail-branding": retailBrandingConfig,
  "restaurant": restaurantConfig,
  "digital-marketing": digitalMarketingConfig,
} as const;

export type IndustryType = keyof typeof industryConfigs;

// Current active configuration - CHANGE THIS TO SWITCH INDUSTRIES
const ACTIVE_INDUSTRY: IndustryType = "retail-branding";

// Export the current configuration
export const config: IndustryConfig = industryConfigs[ACTIVE_INDUSTRY];

// Helper function to get configuration for a specific industry
export const getIndustryConfig = (industry: IndustryType): IndustryConfig => {
  return industryConfigs[industry];
};

// Helper function to get all available industries
export const getAvailableIndustries = (): Array<{
  key: IndustryType;
  name: string;
  description: string;
}> => {
  return Object.entries(industryConfigs).map(([key, config]) => ({
    key: key as IndustryType,
    name: config.industry.name,
    description: config.industry.description,
  }));
};