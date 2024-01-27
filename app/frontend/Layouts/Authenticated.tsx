import * as React from "react"

import FlashMessages from "@/components/FlashMessages"

export default function Authenticated({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <FlashMessages />
      <div>{children}</div>
    </div>
  )
}
