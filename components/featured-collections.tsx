"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const collections = [
  {
    title: { zh: "传统民间故事", en: "Traditional Folk Tales" },
    books: [
      {
        id: "1",
        title: { zh: "公主与太阳花", en: "Princess and Sunflower" },
        image: "/cartoon-fairy-tale-princess-sunflower.jpg",
        style: { zh: "水彩风格", en: "Watercolor" },
        ageRange: { zh: "4-6岁", en: "Ages 4-6" },
        category: "fairy-tales",
        categoryLabel: { zh: "童话故事", en: "Fairy Tales" },
      },
      {
        id: "2",
        title: { zh: "金发公主", en: "Golden Princess" },
        image: "/cartoon-fairy-tale-golden-princess.jpg",
        style: { zh: "卡通风格", en: "Cartoon" },
        ageRange: { zh: "5-7岁", en: "Ages 5-7" },
        category: "fairy-tales",
        categoryLabel: { zh: "童话故事", en: "Fairy Tales" },
      },
      {
        id: "3",
        title: { zh: "掌中男孩", en: "Tiny Boy" },
        image: "/cartoon-fairy-tale-tiny-boy.jpg",
        style: { zh: "漫画风格", en: "Comic" },
        ageRange: { zh: "6-8岁", en: "Ages 6-8" },
        category: "fairy-tales",
        categoryLabel: { zh: "童话故事", en: "Fairy Tales" },
      },
      {
        id: "4",
        title: { zh: "格子窗", en: "Window Pattern" },
        image: "/cartoon-fairy-tale-window-pattern.jpg",
        style: { zh: "插画风格", en: "Illustration" },
        ageRange: { zh: "4-7岁", en: "Ages 4-7" },
        category: "fairy-tales",
        categoryLabel: { zh: "童话故事", en: "Fairy Tales" },
      },
    ],
  },
  {
    title: { zh: "美丽的文化", en: "Beautiful Culture" },
    books: [
      {
        id: "5",
        title: { zh: "我们都是一家人", en: "We Are Family" },
        image: "/cartoon-children-diversity-family.jpg",
        style: { zh: "卡通风格", en: "Cartoon" },
        ageRange: { zh: "3-5岁", en: "Ages 3-5" },
        category: "traditional",
        categoryLabel: { zh: "传统文化", en: "Traditional" },
      },
      {
        id: "6",
        title: { zh: "陶艺蜡染", en: "Pottery & Batik" },
        image: "/cartoon-children-pottery-batik.jpg",
        style: { zh: "写实风格", en: "Realistic" },
        ageRange: { zh: "7-9岁", en: "Ages 7-9" },
        category: "traditional",
        categoryLabel: { zh: "传统文化", en: "Traditional" },
      },
      {
        id: "7",
        title: { zh: "河流教给我的", en: "What Rivers Teach" },
        image: "/cartoon-children-river-nature.jpg",
        style: { zh: "水彩风格", en: "Watercolor" },
        ageRange: { zh: "5-8岁", en: "Ages 5-8" },
        category: "nature",
        categoryLabel: { zh: "自然环境", en: "Nature" },
      },
      {
        id: "8",
        title: { zh: "传统故事", en: "Traditional Tales" },
        image: "/cartoon-children-traditional-tales.jpg",
        style: { zh: "插画风格", en: "Illustration" },
        ageRange: { zh: "4-6岁", en: "Ages 4-6" },
        category: "traditional",
        categoryLabel: { zh: "传统文化", en: "Traditional" },
      },
    ],
  },
]

interface FeaturedCollectionsProps {
  selectedCategory?: string
}

export function FeaturedCollections({ selectedCategory = "all" }: FeaturedCollectionsProps) {
  const { t } = useLanguage()

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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
              {collection.books.map((book, bookIdx) => (
                <Link key={bookIdx} href={`/book/${book.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-[2/3] overflow-hidden bg-muted relative">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={t(book.title)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-1 right-1 md:top-2 md:right-2 bg-primary/90 text-primary-foreground text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-medium">
                        {t(book.style)}
                      </div>
                    </div>
                    <div className="p-2 md:p-3">
                      <h3 className="text-xs md:text-sm font-medium text-foreground line-clamp-2 text-balance mb-1 md:mb-2">
                        {t(book.title)}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-[10px] md:text-xs text-primary bg-primary/10 px-1.5 md:px-2 py-0.5 rounded font-medium">
                          {t(book.categoryLabel)}
                        </span>
                        <span className="text-[10px] md:text-xs text-muted-foreground bg-muted px-1.5 md:px-2 py-0.5 rounded">
                          {t(book.ageRange)}
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
