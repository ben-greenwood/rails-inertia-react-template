import "../css/index.css"

import * as React from "react"

import axios from "axios"
import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"

const container = document.getElementById("app")

if (!container) {
  throw new Error("Could not find app container")
}

const root = createRoot(container)

// Tell Axios to send the CSRF token (taken from the cookie)
// in the header named as "X-CSRF-Token", as this is the name
// expected by Rails
axios.defaults.xsrfHeaderName = "X-CSRF-Token"

const pages = import.meta.glob("../Pages/**/*.tsx")

createInertiaApp({
  resolve: (name) => pages[`../Pages/${name}.tsx`](),
  setup({ App, props }) {
    root.render(<App {...props} />)
  },
})
