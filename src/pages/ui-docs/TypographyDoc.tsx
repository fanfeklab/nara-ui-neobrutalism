import { Typography } from "@/components/ui/typography";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function TypographyDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Typography
        </h1>
        <p className="text-xl text-muted-foreground font-body">
          Styles for headings, paragraphs, lists...etc. Neo-Brutalism requires
          stark contrast and distinct scales.
        </p>
      </div>

      <ComponentPreview
        title="Headings"
        description="Display fonts (Space Grotesk) with heavy weight and uppercase for high impact."
        code={`import { Typography } from "@/components/ui/typography"\n\nexport function TypographyHeadings() {\n  return (\n    <div className="space-y-4">\n      <Typography variant="h1">This is an H1</Typography>\n      <Typography variant="h2">This is an H2</Typography>\n      <Typography variant="h3">This is an H3</Typography>\n      <Typography variant="h4">This is an H4</Typography>\n    </div>\n  )\n}`}
        align="start"
      >
        <div className="space-y-4 w-full">
          <Typography variant="h1">This is an H1</Typography>
          <Typography variant="h2">This is an H2</Typography>
          <Typography variant="h3">This is an H3</Typography>
          <Typography variant="h4">This is an H4</Typography>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Paragraph & Text"
        description="Body text using monospace font (IBM Plex Mono) for technical feel."
        code={`import { Typography } from "@/components/ui/typography"\n\nexport function TypographyText() {\n  return (\n    <div className="space-y-4">\n      <Typography variant="p">The quick brown fox jumps over the lazy dog.</Typography>\n      <Typography variant="lead">A slightly larger lead paragraph for emphasis.</Typography>\n      <Typography variant="large">Large semibold text</Typography>\n      <Typography variant="small">Small text for captions or fine print</Typography>\n      <Typography variant="muted">Muted text that takes a backseat</Typography>\n    </div>\n  )\n}`}
        align="start"
      >
        <div className="space-y-4 w-full">
          <Typography variant="p">
            The quick brown fox jumps over the lazy dog.
          </Typography>
          <Typography variant="lead">
            A slightly larger lead paragraph for emphasis.
          </Typography>
          <Typography variant="large">Large semibold text</Typography>
          <Typography variant="small">
            Small text for captions or fine print
          </Typography>
          <Typography variant="muted">
            Muted text that takes a backseat
          </Typography>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Special Blocks"
        description="Blockquotes and inline code."
        code={`import { Typography } from "@/components/ui/typography"\n\nexport function TypographySpecial() {\n  return (\n    <div className="space-y-6">\n      <Typography variant="blockquote">\n        "Design is not just what it looks like and feels like. Design is how it works."\n      </Typography>\n      <Typography variant="p">\n        Run <Typography variant="code">npm install</Typography> to begin.\n      </Typography>\n    </div>\n  )\n}`}
        align="start"
      >
        <div className="space-y-6 w-full">
          <Typography variant="blockquote">
            "Design is not just what it looks like and feels like. Design is how
            it works."
          </Typography>
          <Typography variant="p">
            Run{" "}
            <Typography variant="code" as="span">
              npm install
            </Typography>{" "}
            to begin.
          </Typography>
        </div>
      </ComponentPreview>
    </div>
  );
}
