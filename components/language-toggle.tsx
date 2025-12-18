"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="outline" size="sm" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} className="gap-2">
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "zh" ? "中文" : "EN"}</span>
    </Button>
  )
}
