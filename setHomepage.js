const fs = require("fs");
const path = require("path");

// Get the current environment (development or production)
const isProduction = process.env.NODE_ENV === "production";

// Define the GitHub Pages URL
const homepageUrl = "https://GeniePrinie.github.io/holteninstitutt";

const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = require(packageJsonPath);

// If we're in production, set the homepage field
if (isProduction) {
  packageJson.homepage = homepageUrl;
} else {
  // Reset to empty for local development
  packageJson.homepage = "";
}

// Write the updated package.json back to disk
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Homepage updated:", packageJson.homepage);
