import * as React from "react"

import FlashMessages from "@/components/FlashMessages"

export default function Unauthenticated({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <FlashMessages />
      {children}
    </div>
  )
}
