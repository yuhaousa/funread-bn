"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const sceneThemes = [
  {
    title: "自然与感知场景",
    icon: "🌿",
    image: "/cartoon-nature-scenes.jpg",
    scenes: [
      "清晨阳光",
      "看见第一朵花",
      "夏夜星空",
      "暴雨来临",
      "雨后天晴",
      "看到彩虹",
      "秋日落叶",
      "冬日初雪",
      "海边看浪",
      "山中远行",
      "看见萤火虫",
      "雷雨夜",
      "雾中清晨",
      "晚霞满天",
      "微风吹过树梢",
    ],
  },
  {
    title: "情绪与心理状态",
    icon: "😟",
    image: "/cartoon-emotions.jpg",
    scenes: [
      "感到孤独",
      "莫名难过",
      "心情烦躁",
      "情绪低落",
      "想找人说话",
      "感到委屈",
      "强烈愤怒",
      "紧张不安",
      "焦虑未来",
      "空虚无聊",
      "思念某人",
      "内疚自责",
      "羞愧难为情",
      "情绪突然失控",
      "感到无助",
      "想逃避现实",
      "压力过大",
      "对自己失望",
      "感觉没人理解",
      "情绪高涨",
    ],
  },
  {
    title: "成长阶段与生活节点",
    icon: "👦",
    image: "/cartoon-growing-up.jpg",
    scenes: [
      "开学第一天",
      "第一次考试",
      "第一次失败",
      "第一次成功",
      "第一次转学",
      "第一次离家住宿",
      "与父母冲突",
      "与老师争执",
      "与朋友决裂",
      "第一次被表扬",
      "第一次被批评",
      "第一次做决定",
      "面临关键选择",
      "第一次承担责任",
      "第一次意识长大",
      "第一次独立完成任务",
      "面对挫折",
      "经历误解",
      "被比较",
      "感到落后",
    ],
  },
  {
    title: "人际关系与情感体验",
    icon: "💬",
    image: "/cartoon-friendship.jpg",
    scenes: [
      "与朋友和好",
      "友情动摇",
      "被背叛",
      "想道歉",
      "想表达感谢",
      "被忽视",
      "想被认同",
      "暗恋",
      "被拒绝",
      "不被信任",
      "渴望理解",
      "想建立友谊",
      "社交恐惧",
      "想突破自我",
      "想表达真实感受",
    ],
  },
  {
    title: "学习与认知场景",
    icon: "🧠",
    image: "/cartoon-learning.jpg",
    scenes: [
      "学不会",
      "听不懂",
      "看不进书",
      "分心严重",
      "学习失控感",
      "想提高效率",
      "对知识失去兴趣",
      "突然开窍",
      "爱上某一学科",
      "感觉自己不聪明",
      "被同龄人超越",
      "害怕失败",
      "想放弃",
      "想证明自己",
      "开始认真思考未来",
    ],
  },
  {
    title: "时代与价值议题",
    icon: "🌐",
    image: "/cartoon-future-thinking.jpg",
    scenes: [
      "质疑成功的意义",
      "对金钱困惑",
      "对公平不解",
      "对死亡好奇",
      "对AI害怕",
      "对未来焦虑",
      "对理想怀疑",
      "感觉努力无用",
      "思考人生价值",
      "想改变世界",
      "质疑权威",
      "感觉社会复杂",
      "思考自我存在",
      "想要变得更好",
      "对意义感到迷茫",
    ],
  },
]

export function SceneThemes() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">真实世界场景阅读</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            根据不同的生活场景，为孩子推荐最合适的阅读内容
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sceneThemes.map((theme, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                selectedCategory === index
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border hover:border-primary hover:shadow-md"
              }`}
            >
              <div
                className="relative h-48 md:h-56 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
              >
                <Image src={theme.image || "/placeholder.svg"} alt={theme.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl">{theme.icon}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{theme.title}</h3>
                  <p className="text-xs md:text-sm text-white/80">
                    {theme.scenes.slice(0, 2).join("、")}等{theme.scenes.length}个场景
                  </p>
                </div>
                <span className="absolute top-4 right-4 text-xs text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {theme.scenes.length}个场景
                </span>
              </div>

              <div className="p-4">
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedCategory === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-2 pb-3">
                    {theme.scenes.map((scene, sceneIndex) => (
                      <Link
                        key={sceneIndex}
                        href={`/book/${index + 1}`}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {scene}
                      </Link>
                    ))}
                  </div>
                </div>

                {selectedCategory !== index && (
                  <div className="flex flex-wrap gap-2">
                    {theme.scenes.slice(0, 6).map((scene, sceneIndex) => (
                      <span key={sceneIndex} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        {scene}
                      </span>
                    ))}
                    {theme.scenes.length > 6 && (
                      <span className="text-xs px-2 py-1 text-primary font-medium">+{theme.scenes.length - 6}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
