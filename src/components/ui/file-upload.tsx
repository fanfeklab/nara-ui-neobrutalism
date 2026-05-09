import * as React from "react"
import { UploadCloud, File, X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileSelect?: (file: File | null) => void
  label?: string
  description?: string
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, onFileSelect, label = "Upload a file", description = "Drag and drop or click to browse", ...props }, ref) => {
    const [dragActive, setDragActive] = React.useState(false)
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true)
      } else if (e.type === "dragleave") {
        setDragActive(false)
      }
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0])
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0])
      }
    }

    const handleFile = (file: File) => {
      setSelectedFile(file)
      onFileSelect?.(file)
    }

    const clearFile = () => {
      setSelectedFile(null)
      onFileSelect?.(null)
    }

    return (
      <div className={className}>
        {!selectedFile ? (
          <div
            className={cn(
              "relative flex flex-col items-center justify-center w-full h-48 border-2 border-black border-dashed rounded-xl bg-white dark:bg-black transition-colors overflow-hidden group cursor-pointer",
              dragActive ? "border-[#ccff00] bg-[#ccff00]/10" : "hover:bg-muted"
            )}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={ref}
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleChange}
              {...props}
            />
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-3 mb-4 rounded-full bg-[#ccff00] border-2 border-black group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <p className="mb-2 text-sm font-bold text-foreground font-display">
                <span className="font-bold underline decoration-2 underline-offset-4">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-muted-foreground font-body">
                {description}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 border-2 border-black rounded-xl bg-card shadow-brutal-sm">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-muted rounded-lg border-2 border-black">
                <File className="w-6 h-6" />
              </div>
              <div className="flex w-full flex-col truncate">
                <p className="text-sm font-bold truncate max-w-[200px] sm:max-w-xs">{selectedFile.name}</p>
                <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              onClick={clearFile}
              className="p-2 border-2 border-transparent rounded-lg hover:border-black hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload }
