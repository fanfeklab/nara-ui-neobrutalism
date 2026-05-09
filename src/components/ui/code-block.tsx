import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
}

export function CodeBlock({
  className,
  code,
  language = "tsx",
  ...props
}: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 rounded-t-xl border-2 border-b-0 border-black font-mono text-xs">
        <span>{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-1"
          aria-label="Copy code"
        >
          {hasCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre
        className={cn(
          "bg-white dark:bg-black text-foreground border-2 border-black rounded-b-xl p-4 overflow-x-auto font-mono text-sm leading-relaxed shadow-brutal-sm",
          className
        )}
        {...props}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
