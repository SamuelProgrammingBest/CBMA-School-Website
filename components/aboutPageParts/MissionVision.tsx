import { Heart, Star } from "lucide-react";
import FadeIn from "../FadeIn";

const MissionVision = () => (
  <section className="bg-slate-50 py-12 md:py-24">
    <div className="mx-auto max-w-6xl px-6">
      <FadeIn className="mb-12 text-center">
        <p className="mb-2 text-sm font-bold text-primary">WHAT DRIVES US</p>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-5">
          Our Mission & <span className="text-primary">Vision</span>
        </h2>
      </FadeIn>

      <FadeIn className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Mission */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-xl font-bold text-foreground">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed">
            CBMA stands to promote and inculcate spiritual, moral, social and academic excellence in line with God's word and our uniquely designed curriculum to meet every aspect of the early child education
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-xl font-bold text-foreground">Our Vision</h3>
          <p className="text-slate-600 leading-relaxed">
            Our vision at CBMA is to plant seeds of lifelong learning, inspire and nurture children as they dicover their innate abilities
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
)

export default MissionVision