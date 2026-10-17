import { Globe, LayoutGrid, PackageOpen, Handshake, Users, Languages, Layers, Percent } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal, SectionHeading } from './shared'

const marketIcons = [Globe, LayoutGrid, PackageOpen, Handshake]
const whyIcons = [Users, Languages, Layers, Percent]

export default function Market() {
  const { t } = useLang()
  return (
    <>
      <section id="market" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.marketSec.title} sub={t.marketSec.sub} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.marketSec.items.map((item, i) => {
              const Icon = marketIcons[i]
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="card-hover h-full rounded-2xl border border-slate-200 bg-slate-50/60 p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="why-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.whySec.title} dark />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {t.whySec.items.map((item, i) => {
              const Icon = whyIcons[i]
              return (
                <Reveal key={item.title} delay={(i % 2) * 100}>
                  <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D52B1E] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
