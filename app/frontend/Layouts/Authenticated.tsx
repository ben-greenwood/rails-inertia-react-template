import * as React from "react"

import { Toaster } from "sonner"
import useFlash from "@/hooks/useFlash"

export default function Authenticated({
  children,
}: {
  children: React.ReactNode
}) {
  useFlash()

  return (
    <div className="min-h-screen">
      <div>{children}</div>
      <Toaster />
    </div>
  )
}
