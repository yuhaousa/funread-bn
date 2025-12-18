"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

// Sample book data
const bookData: Record<string, { title: string; pages: Array<{ image: string; text: string }> }> = {
  "1": {
    title: "公主与太阳花",
    pages: [
      {
        image: "/cartoon-boy-cleaning-toys-room.jpg",
        text: 'Dara walked into their room and asked Sokha what he was doing. "Cleaning out my old baby toys to give to you," responded Sokha. "I\'ve got adult stuff to do now, I\'m going to go read my medical books with mum."',
      },
      {
        image: "/cartoon-girl-playing-with-colorful-toys.jpg",
        text: "Dara looked at the box full of toys. There were cars, blocks, and stuffed animals. She smiled and started to play with them.",
      },
      {
        image: "/cartoon-mother-child-reading-books.jpg",
        text: "Meanwhile, Sokha sat with his mother, carefully reading the medical books. He wanted to learn everything he could.",
      },
      {
        image: "/cartoon-siblings-playing-happily.jpg",
        text: "Later that day, Dara asked Sokha to play with her. He realized that growing up doesn't mean leaving all fun behind.",
      },
    ],
  },
  "2": {
    title: "金发公主",
    pages: [
      {
        image: "/cartoon-princess-golden-hair-castle.jpg",
        text: "从前,有一位美丽的金发公主住在高高的城堡里。她的头发如同阳光般闪耀。",
      },
      {
        image: "/cartoon-princess-window-sunrise.jpg",
        text: "每天清晨,公主都会站在窗前,看着太阳从东方升起,照亮整个王国。",
      },
      {
        image: "/cartoon-princess-garden-flowers.jpg",
        text: "她喜欢在花园里散步,和小鸟们说话,照顾美丽的花朵。",
      },
    ],
  },
}

export default function BookPage({ params }: { params: { id: string } }) {
  const book = bookData[params.id] || bookData["1"]
  const [currentPage, setCurrentPage] = useState(0)

  const goToNextPage = () => {
    if (currentPage < book.pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleSliderChange = (value: number[]) => {
    setCurrentPage(value[0])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center justify-between">
          <Link href="/" className="text-primary hover:text-primary/80 flex items-center gap-1 md:gap-2">
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-medium text-sm md:text-base">返回</span>
          </Link>
          <h1 className="text-sm md:text-lg font-bold text-foreground text-center flex-1 px-2">{book.title}</h1>
          <div className="w-12 md:w-24" />
        </div>
      </header>

      {/* Reading Area */}
      <main className="container mx-auto px-3 md:px-4 py-6 md:py-8 max-w-4xl">
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 h-10 w-10 md:h-12 md:w-12 rounded-full bg-card shadow-lg hover:bg-accent disabled:opacity-30 z-10"
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            aria-label="上一页"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 h-10 w-10 md:h-12 md:w-12 rounded-full bg-card shadow-lg hover:bg-accent disabled:opacity-30 z-10"
            onClick={goToNextPage}
            disabled={currentPage === book.pages.length - 1}
            aria-label="下一页"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Book Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted flex items-center justify-center mx-auto max-w-2xl">
              <img
                src={book.pages[currentPage].image || "/placeholder.svg"}
                alt={`Page ${currentPage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="prose prose-base md:prose-lg max-w-none px-2 md:px-0">
              <p className="text-foreground/90 leading-relaxed text-center text-pretty text-sm md:text-base">
                {book.pages[currentPage].text}
              </p>
            </div>
          </div>
        </div>

        {/* Page Navigation */}
        <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
          {/* Progress Slider */}
          <div className="px-2">
            <Slider
              value={[currentPage]}
              onValueChange={handleSliderChange}
              max={book.pages.length - 1}
              step={1}
              className="cursor-pointer"
              aria-label="页面导航"
            />
          </div>

          {/* Page Counter */}
          <div className="text-center">
            <span className="text-xs md:text-sm font-medium text-muted-foreground">
              {currentPage + 1}/{book.pages.length}
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
