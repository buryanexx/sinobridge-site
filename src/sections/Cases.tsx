import { Factory, Quote } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal, SectionHeading } from './shared'

export default function Cases() {
  const { t } = useLang()
  return (
    <section id="cases" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.casesSec.title} sub={t.casesSec.sub} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.casesSec.items.map((c, i) => (
            <Reveal key={c.tag} delay={i * 100}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
                <Quote className="h-7 w-7 text-[#D52B1E]/40" />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">{c.desc}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Factory className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{c.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
