module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true, // Add semicolons
  trailingComma: "all", // Include trailing commas in all objects and arrays
  singleQuote: true, // Use single quotes
  printWidth: 120, // Wrap code at 120 characters
  tabWidth: 2, // Use 2 spaces for tabs
  arrowParens: "always", // Always include parentheses around arrow functions
  bracketSpacing: true, // Add space between brackets in JSX
  endOfLine: "lf", // Use LF line endings
  filepaths: {
    ignore: ["node_modules/*", "dist/*"], // Ignore specific folders
  },
};