import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    // We replace some hardcoded hexes directly to semantic tailwind classes
    content = content.replace(/#ccff00/gi, 'var(--color-primary)'); // For inline styles
    content = content.replace(/#8a2be2/gi, 'var(--color-secondary)');
    content = content.replace(/#ff5500/gi, 'var(--color-accent)');
    content = content.replace(/#0a192f/gi, 'var(--color-background)'); // dark mode bg
    content = content.replace(/#112240/gi, 'var(--color-card)'); // dark mode card

    // Replace specific hardcoded tailwind classes where appropriate.
    // e.g. text-[#ccff00] -> text-primary
    content = content.replace(/text-\[\#ccff00\]/gi, "text-primary");
    content = content.replace(/bg-\[\#ccff00\]/gi, "bg-primary");
    content = content.replace(/text-\[\#8a2be2\]/gi, "text-secondary");
    content = content.replace(/bg-\[\#8a2be2\]/gi, "bg-secondary");
    
    // Convert bg-white to bg-card when it acts as a container background.
    // If it's a layout background, it should be bg-background but bg-card is safer.
    content = content.replace(/bg-white(?!\/)/g, "bg-card");
    
    // For text colors:
    // If it was text on bg-card (was white), it was text-black. We'll change text-black to text-card-foreground
    // But text-black on bg-primary is correct.
    // This is hard to do via regex safely, so let's target explicit things we can see:
    
    // Replace text-white drop-shadow...
    content = content.replace(/text-white drop-shadow/g, "text-card drop-shadow");
    
    // A lot of "bg-card text-black" will be produced, fix them to "bg-card text-card-foreground"
    content = content.replace(/bg-card(\s+)text-black/g, "bg-card$1text-card-foreground");

    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log(`Updated colors in ${filepath}`);
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

walkDir('src/pages');
walkDir('src/components');
walkDir('src/layouts');
