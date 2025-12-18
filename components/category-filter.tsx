"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "全部", value: "all" },
  { id: "fairy-tales", label: "童话故事", value: "fairy-tales" },
  { id: "science", label: "科学探索", value: "science" },
  { id: "animals", label: "动物世界", value: "animals" },
  { id: "traditional", label: "传统文化", value: "traditional" },
  { id: "nature", label: "自然环境", value: "nature" },
  { id: "family", label: "家庭生活", value: "family" },
  { id: "music", label: "音乐艺术", value: "music" },
  { id: "sports", label: "运动健康", value: "sports" },
  { id: "adventure", label: "冒险探险", value: "adventure" },
  { id: "friendship", label: "友情成长", value: "friendship" },
  { id: "education", label: "学习启蒙", value: "education" },
]

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <div className="py-12 bg-background/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-balance">浏览图书分类</h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
