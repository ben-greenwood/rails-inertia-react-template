import { InteriaPage } from "@/types/InertiaPage"
import { toast } from "sonner"
import { useEffect } from "react"
import { usePage } from "@inertiajs/react"

const useFlash = () => {
  const { flash } = usePage<InteriaPage>().props

  useEffect(() => {
    if (flash?.alert) {
      toast.error(flash.alert || "There was a problem")
    }

    if (flash?.success) {
      toast.success(flash.success || "Success!")
    }
  }, [flash])

  return null
}

export default useFlash
