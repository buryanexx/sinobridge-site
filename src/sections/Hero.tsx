import { ArrowRight, TrendingUp, ShoppingBag, Users, Percent, BadgeCheck } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal } from './shared'

function Bar({ h, active }: { h: number; active?: boolean }) {
  return (
    <div
      className={`w-full rounded-t ${active ? 'bg-[#D52B1E]' : 'bg-white/15'}`}
      style={{ height: `${h}%` }}
    />
  )
}

function Dashboard() {
  const { t } = useLang()
  const heights = [35, 48, 42, 60, 55, 72, 64, 85, 78, 95]
  return (
    <div className="dash-card">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium tracking-wide text-slate-400">{t.hero.panelLabel}</span>
        <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
          <TrendingUp className="h-3 w-3" />
          +23.4%
        </span>
      </div>
      <div className="mb-1 text-3xl font-bold text-white">
        ¥ 182,400
      </div>
      <div className="mb-5 text-xs text-slate-500">
        {t.hero.todaySales} · {t.hero.growth}
      </div>
      <div className="mb-5 flex h-28 items-end gap-1.5">
        {heights.map((h, i) => (
          <Bar key={i} h={h} active={i === heights.length - 1} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
        <div>
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500">
            <ShoppingBag className="h-3 w-3" /> {t.hero.orders}
          </div>
          <div className="mt-1 text-sm font-bold text-white">1,284</div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500">
            <Users className="h-3 w-3" /> {t.hero.visitors}
          </div>
          <div className="mt-1 text-sm font-bold text-white">9,631</div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500">
            <Percent className="h-3 w-3" /> {t.hero.conversion}
          </div>
          <div className="mt-1 text-sm font-bold text-white">4.8%</div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-white/5 p-3">
        <div className="mb-2 text-[11px] text-slate-500">{t.hero.share}</div>
        <div className="flex h-2.5 w-full overflow-hidden rounded-full">
          <div className="bg-[#7B61FF]" style={{ width: '58%' }} />
          <div className="bg-[#005BFF]" style={{ width: '42%' }} />
        </div>
        <div className="mt-2 flex justify-between text-[11px] font-medium">
          <span className="text-[#A794FF]">Wildberries · 58%</span>
          <span className="text-[#4D8DFF]">Ozon · 42%</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="top" className="hero-bg relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">
              <BadgeCheck className="h-3.5 w-3.5 text-[#FF6B5E]" />
              {t.hero.badge}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {t.hero.titleA}
              <span className="grad-text block">{t.hero.titleB}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.hero.sub}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#D52B1E]/30 transition-all hover:bg-[#B02418] hover:shadow-[#D52B1E]/50"
              >
                {t.hero.primary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.hero.secondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {t.hero.trust.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D52B1E]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="lg:justify-self-end">
          <Dashboard />
        </Reveal>
      </div>
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
          {t.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center md:py-8">
              <div className="text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1.5 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="pb-4 text-center text-[11px] text-slate-600">{t.hero.footnote}</p>
      </div>
    </section>
  )
}
