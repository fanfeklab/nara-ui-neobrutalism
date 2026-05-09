import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
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
    <div className={cn("relative group rounded-2xl border-2 border-black shadow-brutal overflow-hidden flex flex-col mb-4 bg-black", className)} {...props}>
      {/* MacOS Window Controls & Header */}
      <div className="flex items-center justify-between bg-black text-white px-4 py-3 font-mono text-xs border-b-2 border-border shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        
        <div className="flex items-center gap-3">
          <span className="opacity-80 font-bold lowercase tracking-wider">{language}</span>
          <button
            onClick={copyToClipboard}
            className="text-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
            aria-label="Copy code"
          >
            {hasCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
      
      {/* Code Content */}
      <div className="w-full overflow-hidden bg-black text-white">
        <Highlight
          theme={themes.vsDark}
          code={code.trim()}
          language={language as any}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(className, "p-4 overflow-x-auto font-mono text-sm leading-relaxed text-left m-0")}
              style={{ ...style, backgroundColor: 'transparent' }}
            >
              <code>
                {tokens.map((line, i) => {
                  const { key: lineKey, ...lineProps } = getLineProps({ line, key: i })
                  return (
                    <div key={lineKey || i} {...lineProps} className="table-row">
                      <span className="table-cell text-right pr-6 select-none opacity-40 text-xs w-8 pb-1">
                        {i + 1}
                      </span>
                      <span className="table-cell pb-1">
                        {line.map((token, key) => {
                          const { key: tokenKey, ...tokenProps } = getTokenProps({ token, key })
                          return <span key={tokenKey || key} {...tokenProps} />
                        })}
                      </span>
                    </div>
                  )
                })}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
