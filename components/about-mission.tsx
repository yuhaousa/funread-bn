import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Users, Globe } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "免费数字图书馆",
    description: "提供数千本适合儿童的高质量书籍",
  },
  {
    icon: Heart,
    title: "培养阅读热爱",
    description: "通过精彩的故事激发孩子的想象力",
  },
  {
    icon: Users,
    title: "社区参与",
    description: "连接教育工作者、家长和儿童",
  },
  {
    icon: Globe,
    title: "多语言资源",
    description: "支持多种语言的阅读材料",
  },
]

export function AboutMission() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground text-balance">我们的使命</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">
            我们致力于为所有儿童提供优质的阅读资源，培养他们对阅读的热爱，
            帮助他们发展语言能力、想象力和创造力。通过阅读，我们相信每个孩子 都能发现自己的潜力，探索无限的可能。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              开始阅读
            </Button>
            <Button size="lg" variant="outline">
              了解更多
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="text-center p-6 rounded-2xl bg-card hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground text-balance">{feature.title}</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
