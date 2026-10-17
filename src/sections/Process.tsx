import { FileSearch2, FileSignature, Boxes, Rocket, LineChart } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal, SectionHeading } from './shared'

const icons = [FileSearch2, FileSignature, Boxes, Rocket, LineChart]

export default function Process() {
  const { t } = useLang()
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.processSec.title} sub={t.processSec.sub} />
        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-slate-200 lg:left-0 lg:right-0 lg:top-[27px] lg:h-px lg:w-auto lg:bottom-auto" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {t.processSec.steps.map((step, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={step.title} delay={i * 110}>
                  <div className="relative flex gap-5 lg:block">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#D52B1E] text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <div className="lg:mt-5">
                      <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
