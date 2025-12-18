"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    title: "传统民间故事",
    books: [
      {
        id: "1",
        title: "公主与太阳花",
        image: "/cartoon-fairy-tale-princess-sunflower.jpg",
        style: "水彩风格",
        ageRange: "4-6岁",
        category: "fairy-tales",
        categoryLabel: "童话故事",
      },
      {
        id: "2",
        title: "金发公主",
        image: "/cartoon-fairy-tale-golden-princess.jpg",
        style: "卡通风格",
        ageRange: "5-7岁",
        category: "fairy-tales",
        categoryLabel: "童话故事",
      },
      {
        id: "3",
        title: "掌中男孩",
        image: "/cartoon-fairy-tale-tiny-boy.jpg",
        style: "漫画风格",
        ageRange: "6-8岁",
        category: "fairy-tales",
        categoryLabel: "童话故事",
      },
      {
        id: "4",
        title: "格子窗",
        image: "/cartoon-fairy-tale-window-pattern.jpg",
        style: "插画风格",
        ageRange: "4-7岁",
        category: "fairy-tales",
        categoryLabel: "童话故事",
      },
    ],
  },
  {
    title: "美丽的文化",
    books: [
      {
        id: "5",
        title: "我们都是一家人",
        image: "/cartoon-children-diversity-family.jpg",
        style: "卡通风格",
        ageRange: "3-5岁",
        category: "traditional",
        categoryLabel: "传统文化",
      },
      {
        id: "6",
        title: "陶艺蜡染",
        image: "/cartoon-children-pottery-batik.jpg",
        style: "写实风格",
        ageRange: "7-9岁",
        category: "traditional",
        categoryLabel: "传统文化",
      },
      {
        id: "7",
        title: "河流教给我的",
        image: "/cartoon-children-river-nature.jpg",
        style: "水彩风格",
        ageRange: "5-8岁",
        category: "nature",
        categoryLabel: "自然环境",
      },
      {
        id: "8",
        title: "传统故事",
        image: "/cartoon-children-traditional-tales.jpg",
        style: "插画风格",
        ageRange: "4-6岁",
        category: "traditional",
        categoryLabel: "传统文化",
      },
    ],
  },
]

interface FeaturedCollectionsProps {
  selectedCategory?: string
}

export function FeaturedCollections({ selectedCategory = "all" }: FeaturedCollectionsProps) {
  const filteredCollections = collections
    .map((collection) => ({
      ...collection,
      books: collection.books.filter((book) => selectedCategory === "all" || book.category === selectedCategory),
    }))
    .filter((collection) => collection.books.length > 0)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {filteredCollections.map((collection, idx) => (
          <div key={idx} className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{collection.title}</h2>
              <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm md:text-base">
                <span className="hidden sm:inline">查看全部</span>
                <span className="sm:hidden">全部</span>
                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
              {collection.books.map((book, bookIdx) => (
                <Link key={bookIdx} href={`/book/${book.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-[2/3] overflow-hidden bg-muted relative">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-1 right-1 md:top-2 md:right-2 bg-primary/90 text-primary-foreground text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-medium">
                        {book.style}
                      </div>
                    </div>
                    <div className="p-2 md:p-3">
                      <h3 className="text-xs md:text-sm font-medium text-foreground line-clamp-2 text-balance mb-1 md:mb-2">
                        {book.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-[10px] md:text-xs text-primary bg-primary/10 px-1.5 md:px-2 py-0.5 rounded font-medium">
                          {book.categoryLabel}
                        </span>
                        <span className="text-[10px] md:text-xs text-muted-foreground bg-muted px-1.5 md:px-2 py-0.5 rounded">
                          {book.ageRange}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
