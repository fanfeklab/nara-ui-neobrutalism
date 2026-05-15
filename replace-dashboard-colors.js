import fs from 'fs';

let content = fs.readFileSync('src/layouts/DashboardLayout.tsx', 'utf-8');

content = content.replace(/text-white/g, 'text-foreground');
content = content.replace(/bg-background text-foreground text-foreground/g, 'bg-card text-card-foreground');
content = content.replace(/text-black/g, 'text-foreground');
content = content.replace(/text-slate-300/g, 'text-muted-foreground');
content = content.replace(/text-slate-400/g, 'text-muted-foreground/80');
content = content.replace(/hover:bg-white\/5/g, 'hover:bg-muted');
content = content.replace(/hover:bg-white\/10/g, 'hover:bg-muted');
content = content.replace(/bg-white\/10/g, 'bg-muted');
content = content.replace(/border-black\/20/g, 'border-border');

// For the logo letter "N" inside a badge
content = content.replace(/bg-accent border-2 border-border flex items-center justify-center font-display font-bold text-foreground/g, 'bg-accent border-2 border-black flex items-center justify-center font-display font-bold text-accent-foreground');

fs.writeFileSync('src/layouts/DashboardLayout.tsx', content);
