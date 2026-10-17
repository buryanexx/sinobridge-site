import {
  Store,
  ClipboardList,
  Truck,
  ShieldCheck,
  Megaphone,
  BarChart3,
} from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal, SectionHeading } from './shared'

const icons = [Store, ClipboardList, Truck, ShieldCheck, Megaphone, BarChart3]

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.servicesSec.title} sub={t.servicesSec.sub} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.servicesSec.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <div className="card-hover h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D52B1E]/10 text-[#D52B1E]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
