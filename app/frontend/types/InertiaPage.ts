import type { ErrorBag, Errors, Page, PageProps } from "@inertiajs/core"

export interface InteriaPage extends Page<PageProps> {
  [key: string]: any
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

