"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { CategoryFilter } from "@/components/category-filter"
import { FeaturedCollections } from "@/components/featured-collections"
import { BookCategories } from "@/components/book-categories"
import { AboutMission } from "@/components/about-mission"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { SceneThemes } from "@/components/scene-themes"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryFilter onCategoryChange={setSelectedCategory} />
      <FeaturedCollections selectedCategory={selectedCategory} />
      <BookCategories />
      <SceneThemes />
      <AboutMission />
      <Partners />
      <Footer />
    </main>
  )
}
