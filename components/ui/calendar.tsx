"use client"

import type { SVGProps } from "react"
import { CalendarIcon } from "lucide-react"

/**
 * Calendar
 * A thin wrapper around Lucide-React’s Calendar icon so that
 * `import { Calendar } from "@/components/ui/calendar"` works
 * everywhere in the project.
 */
export function Calendar(props: SVGProps<SVGSVGElement>) {
  return <CalendarIcon {...props} />
}
