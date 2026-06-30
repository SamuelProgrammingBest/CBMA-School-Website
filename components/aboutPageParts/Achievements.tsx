import FadeIn from "../FadeIn"

const Achievements = () => {
  const achievements = [
    { year: "2008", title: "Best School Award", body: "Recognized by the state ministry of education for academic excellence." },
    { year: "2013", title: "WAEC Top School", body: "100% pass rate in WAEC for 3 consecutive years." },
    { year: "2018", title: "Sports Excellence", body: "State champions in inter-school athletics competition." },
    { year: "2023", title: "20 Years of Impact", body: "Celebrated 20 years of shaping minds and building futures." },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn className="mb-12 text-center">
        <p className="mb-2 text-sm font-bold text-primary">OUR TRACK RECORD</p>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Achievements & <span className="text-primary">Milestones</span>
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {achievements.map((item, i) => (
          <FadeIn key={i}>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg">
                {item.year}
              </div>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Achievements