#!/usr/bin/env node

/**
 * Industry Switcher Script
 * 
 * This script allows you to quickly switch between different industry configurations
 * Usage: node scripts/switch-industry.js [industry-name]
 */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../src/config/index.ts');

const industries = {
  'retail': 'retail-branding',
  'restaurant': 'restaurant', 
  'digital': 'digital-marketing'
};

const industryArg = process.argv[2];

if (!industryArg) {
  console.log('\n🏢 Available Industries:');
  console.log('  npm run switch retail      # Retail Branding & Installation');
  console.log('  npm run switch restaurant  # Restaurant Branding & Setup');
  console.log('  npm run switch digital     # Digital Marketing Agency\n');
  process.exit(1);
}

const industryKey = industries[industryArg];

if (!industryKey) {
  console.error(`❌ Unknown industry: ${industryArg}`);
  console.log('Available: retail, restaurant, digital');
  process.exit(1);
}

// Read current config file
const configContent = fs.readFileSync(configPath, 'utf8');

// Replace the ACTIVE_INDUSTRY line
const newConfigContent = configContent.replace(
  /const ACTIVE_INDUSTRY: IndustryType = "[^"]+";/,
  `const ACTIVE_INDUSTRY: IndustryType = "${industryKey}";`
);

// Write back to file
fs.writeFileSync(configPath, newConfigContent);

console.log(`✅ Switched to ${industryArg} industry (${industryKey})`);
console.log('🚀 Restart your dev server to see changes: npm run dev');