import "../css/index.css"

import React from "react"
import { createInertiaApp } from "@inertiajs/inertia-react"
import { render } from "react-dom"

const pages = import.meta.glob("../Pages/**/*.tsx")

createInertiaApp({
  resolve: (name) => pages[`../Pages/${name}.tsx`](),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
