import * as React from "react"

import { Toaster } from "sonner"
import useFlash from "@/hooks/useFlash"

export default function Unauthenticated({
  children,
}: {
  children: React.ReactNode
}) {
  useFlash()

  return (
    <div className="min-h-screen">
      {children}
      <Toaster />
    </div>
  )
}
