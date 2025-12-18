import { Hero } from "@/components/hero"
import { CategoryFilter } from "@/components/category-filter"
import { FeaturedCollections } from "@/components/featured-collections"
import { BookCategories } from "@/components/book-categories"
import { AboutMission } from "@/components/about-mission"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryFilter />
      <FeaturedCollections />
      <BookCategories />
      <AboutMission />
      <Partners />
      <Footer />
    </main>
  )
}
