import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function FileUploadDoc() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          File Upload
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Drag and drop file upload component with visual feedback and pure Neo-Brutalism styling.
        </p>
      </div>

      <ComponentPreview
        title="Drag & Drop Upload"
        description="A full-featured drag and drop area for uploading files."
        code={`import { FileUpload } from "@/components/ui/file-upload"\n\nexport function FileUploadDemo() {\n  return (\n    <FileUpload\n      onFileSelect={(file) => console.log(file)}\n      description="SVG, PNG, JPG or GIF (MAX. 800x400px)"\n    />\n  )\n}`}
      >
        <div className="w-full max-w-md">
          <FileUpload
            onFileSelect={(f) => setFile(f)}
            description="SVG, PNG, JPG or GIF (MAX. 800x400px)"
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Standard Input File"
        description="The basic HTML input file adjusted for Neo-Brutalism using the Input component."
        code={`import { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\n\nexport function StandardInputFile() {\n  return (\n    <div className="grid w-full max-w-sm items-center gap-1.5">\n      <Label htmlFor="picture">Picture</Label>\n      <Input id="picture" type="file" />\n    </div>\n  )\n}`}
      >
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="picture" className="font-display font-bold">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      </ComponentPreview>
    </div>
  );
}
