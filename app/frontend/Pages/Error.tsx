import React from "react"

export default function Error({ status }: { status: number }) {
  return (
    <main className="min-h-screen">
      <div>
        <p>{status} error</p>
        <h1>Page can&apos;t be found</h1>
      </div>
    </main>
  )
}
