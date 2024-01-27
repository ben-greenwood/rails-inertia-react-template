import { InteriaPage } from "@/types/InertiaPage"
import { usePage } from "@inertiajs/react"

export default function FlashMessages() {
  const { flash } = usePage<InteriaPage>().props

  if (flash.alert) {
    return <div>{flash.alert}</div>
  }

  if (flash.success) {
    return <div>{flash.success}</div>
  }

  if (flash.error) {
    return <div>{flash.error}</div>
  }

  if (flash.info) {
    return <div>{flash.info}</div>
  }

  return null
}
