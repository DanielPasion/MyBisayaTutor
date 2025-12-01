const fs = require("fs");
const path = require("path");

const SENTENCE_COUNTS = {
  New: 5999,
  Beginner: 5180,
  Intermediate: 3076,
  Advanced: 2078,
};

console.log("🚀 Starting import generation...");

let fileContent = "// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY\n\n";

// Generate all imports
console.log("📝 Writing import statements...");
for (const [difficulty, count] of Object.entries(SENTENCE_COUNTS)) {
  console.log(`  Writing ${difficulty}: ${count * 2} imports...`);
  for (let i = 1; i <= count; i++) {
    fileContent += `import ${difficulty}A${i} from "@/app/constants/listening/${difficulty}/audio/${i}.mp3";\n`;
    fileContent += `import ${difficulty}S${i} from "@/app/constants/listening/${difficulty}/sentence/${i}.json";\n`;
  }
  fileContent += "\n";
}

// Generate AudioMappings
console.log("📦 Creating AudioMappings object...");
fileContent += "export const AudioMappings = {\n";
for (const [difficulty, count] of Object.entries(SENTENCE_COUNTS)) {
  fileContent += `  ${difficulty}: {\n`;
  for (let i = 1; i <= count; i++) {
    fileContent += `    ${i}: ${difficulty}A${i},\n`;
  }
  fileContent += "  },\n";
}
fileContent += "};\n\n";

// Generate SentenceMappings
console.log("📦 Creating SentenceMappings object...");
fileContent += "export const SentenceMappings = {\n";
for (const [difficulty, count] of Object.entries(SENTENCE_COUNTS)) {
  fileContent += `  ${difficulty}: {\n`;
  for (let i = 1; i <= count; i++) {
    fileContent += `    ${i}: ${difficulty}S${i},\n`;
  }
  fileContent += "  },\n";
}
fileContent += "};\n";

// Write to file
const outputPath = path.join(
  __dirname,
  "../app/constants/listening/imports.ts"
);
console.log("💾 Writing to file...");
fs.writeFileSync(outputPath, fileContent);

const stats = fs.statSync(outputPath);
const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

console.log("✅ COMPLETE!");
console.log(`📁 File: ${outputPath}`);
console.log(
  `📊 Total lines: ${fileContent.split("\n").length.toLocaleString()}`
);
console.log(`💾 File size: ${fileSizeInMB} MB`);
console.log(
  `🎯 Total imports: ${(
    Object.values(SENTENCE_COUNTS).reduce((a, b) => a + b, 0) * 2
  ).toLocaleString()}`
);
