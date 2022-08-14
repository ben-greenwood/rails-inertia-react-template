import type { Page, PageProps, Errors, ErrorBag } from "@inertiajs/inertia"

declare global {
  interface InteriaPage extends Page<PageProps> {
    props: {
      flash: {
        success: boolean
        alert: boolean
        error: boolean
        info: boolean
      }
      errors: Errors & ErrorBag
      current_account: {
        email: string
        first_name: string
        last_name: string
      }
    }
  }
}
