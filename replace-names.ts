import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    // Add import if not present
    if (content.match(/NARA|Nadia|Hanif/) && !content.includes('BRAND')) {
      // Find the last import
      const lastImportMatch = content.match(/import .* from .*;/g);
      if (lastImportMatch) {
         const lastImport = lastImportMatch[lastImportMatch.length - 1];
         // Need to be careful because we might need to figure out relative path to config
         // Let's just use @/config/brand.config
         content = content.replace(lastImport, `${lastImport}\nimport { BRAND } from "@/config/brand.config";`);
      } else {
         content = `import { BRAND } from "@/config/brand.config";\n${content}`;
      }
    }

    content = content.replace(/NARA EVENTS/g, "{BRAND.name}");
    content = content.replace(/>\s*\{BRAND\.name\}\s*</g, ">{BRAND.name}<"); // fix JSX
    content = content.replace(/'NARA EVENTS'/g, "BRAND.name");
    content = content.replace(/"NARA EVENTS"/g, "BRAND.name");
    content = content.replace(/NARA UI Kit/g, "{BRAND.name} UI Kit");

    content = content.replace(/Nadia Kirana/g, "{BRAND.founder.name}");
    content = content.replace(/Hanif S/g, "{BRAND.engineer.name}");
    // Only standalone Hanif
    content = content.replace(/\bHanif\b(?! S)/g, "{BRAND.engineer.firstName}");

    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log(`Updated names in ${filepath}`);
    }
}

function walkDir(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkDir(filepath);
        } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
            processFile(filepath);
        }
    }
}

walkDir('src/pages/ui-docs');
walkDir('src/layouts');
