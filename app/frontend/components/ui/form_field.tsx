import * as React from "react"

import { cn } from "@/lib/utils"

interface Props {
  children: React.ReactNode
  className?: string
  error?: string
}

export function FormField({ children, className, error }: Props) {
  return (
    <div className={cn(className)}>
      {children}
      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  )
}
