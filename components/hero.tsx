"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

const slides = [
  {
    title: { zh: "奇妙的海洋世界", en: "Wonderful Ocean World" },
    description: { zh: "探索我们海洋的精彩世界！", en: "Explore the fascinating world of our oceans!" },
    image: "/cartoon-ocean-underwater-scene.jpg",
    alt: "Ocean background",
    textColor: "text-cyan-300",
    descColor: "text-cyan-100",
  },
  {
    title: { zh: "神奇的动物王国", en: "Magical Animal Kingdom" },
    description: { zh: "认识可爱的森林小伙伴们", en: "Meet adorable forest friends" },
    image: "/cartoon-forest-animals-scene.jpg",
    alt: "Forest animals background",
    textColor: "text-lime-300",
    descColor: "text-lime-100",
  },
  {
    title: { zh: "美妙的太空冒险", en: "Amazing Space Adventure" },
    description: { zh: "一起飞向星辰大海！", en: "Let's fly to the stars!" },
    image: "/cartoon-space-adventure-scene.jpg",
    alt: "Space adventure background",
    textColor: "text-violet-300",
    descColor: "text-violet-100",
  },
  {
    title: { zh: "快乐的农场生活", en: "Happy Farm Life" },
    description: { zh: "体验温馨的田园时光", en: "Experience warm countryside moments" },
    image: "/cartoon-farm-countryside-scene.jpg",
    alt: "Farm countryside background",
    textColor: "text-amber-300",
    descColor: "text-amber-100",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
        {/* Logo and language toggle row */}
        <div className="flex justify-center items-center mb-6 md:mb-8 relative">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            {t({ zh: "让我们一起阅读", en: "Let's Read Together" })}
          </div>
          <div className="absolute right-0">
            <LanguageToggle />
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-br from-secondary to-accent rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center text-center overflow-hidden relative">
            <div className="absolute inset-0">
              <img
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/50" />
            </div>

            <div className="relative z-10">
              <h1
                className={`text-2xl md:text-4xl lg:text-6xl font-bold ${slides[currentSlide].textColor} mb-3 md:mb-4 text-balance drop-shadow-lg`}
              >
                {t(slides[currentSlide].title)}
              </h1>
              <p
                className={`text-base md:text-lg lg:text-xl ${slides[currentSlide].descColor} mb-4 md:mb-6 text-balance drop-shadow-md`}
              >
                {t(slides[currentSlide].description)}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base">
                {t({ zh: "立即阅读", en: "Read Now" })}
              </Button>
            </div>

            {/* Decorative circles */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Carousel controls */}
          <div className="hidden md:flex absolute inset-y-0 left-0 items-center -ml-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-card shadow-lg hover:bg-card/90"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center -mr-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-card shadow-lg hover:bg-card/90"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
