const partners = ["教育部门", "图书出版社", "儿童基金会", "阅读推广组织", "学校联盟", "社区图书馆"]

export function Partners() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-foreground">我们的合作伙伴</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 bg-card rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">{partner.charAt(0)}</span>
                </div>
                <p className="text-sm font-medium text-foreground text-balance">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
