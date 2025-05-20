import { Sparkles, Trees } from "lucide-react"

export default function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Trees className="h-full w-full text-primary" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <Sparkles className="h-2/3 w-2/3 text-amber-400" />
      </div>
    </div>
  )
}
