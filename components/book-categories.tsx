import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "超级英雄爸爸",
    description: "关于和爸爸一起成长和学习的书籍！",
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/cartoon-father-child-superhero.jpg",
  },
  {
    title: "伟大的妈妈",
    description: "温暖人心的书籍，向所有母亲致敬。",
    color: "from-pink-500/20 to-rose-500/20",
    image: "/cartoon-mother-child-love.jpg",
  },
  {
    title: "美食冒险",
    description: "关于美食家、小厨师和美味菜肴的书籍。",
    color: "from-orange-500/20 to-amber-500/20",
    image: "/cartoon-children-cooking-food.jpg",
  },
  {
    title: "自然奇观",
    description: "为自然爱好者和户外运动爱好者准备的书籍。",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/cartoon-children-nature-outdoor.jpg",
  },
  {
    title: "科学探索",
    description: "激发好奇心，探索科学的奥秘和实验。",
    color: "from-purple-500/20 to-violet-500/20",
    image: "/cartoon-children-science-lab.jpg",
  },
  {
    title: "动物朋友",
    description: "认识可爱的动物朋友，学习关爱生命。",
    color: "from-teal-500/20 to-cyan-500/20",
    image: "/cartoon-children-animals-zoo.jpg",
  },
  {
    title: "音乐旋律",
    description: "跟随节拍，享受音乐带来的快乐。",
    color: "from-indigo-500/20 to-blue-500/20",
    image: "/cartoon-children-music-instruments.jpg",
  },
  {
    title: "运动健将",
    description: "运动让我们更健康，更快乐！",
    color: "from-red-500/20 to-orange-500/20",
    image: "/cartoon-children-sports-play.jpg",
  },
]

export function BookCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">探索更多主题</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <Card
              key={idx}
              className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-balance">{category.title}</h3>
                  <p className="text-white/90 text-balance">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
