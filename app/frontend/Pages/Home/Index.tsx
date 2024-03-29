import * as React from "react"

import Authenticated from "@/layouts/Authenticated"
import { Link } from "@inertiajs/react"
import { destroy_account_session_path } from "@/routes"

export default function Index() {
  return (
    <Authenticated>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="font-black">Hello Logged in World</h1>
        <Link href={destroy_account_session_path()} as="button" method="delete">
          Log out
        </Link>
      </div>
    </Authenticated>
  )
}
