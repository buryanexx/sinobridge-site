import { useState, type FormEvent } from 'react'
import { CheckCircle2, QrCode, Mail, Phone, Clock } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal, SectionHeading, Logo } from './shared'

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    'w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#D52B1E] focus:outline-none focus:ring-1 focus:ring-[#D52B1E]'

  return (
    <>
      <section id="contact" className="contact-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.contactSec.title} sub={t.contactSec.sub} dark />
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-7 shadow-2xl sm:p-9">
                {sent ? (
                  <div className="flex flex-col items-center py-14 text-center">
                    <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                    <p className="mt-5 text-lg font-bold text-slate-900">{t.contactSec.success}</p>
                    <p className="mt-2 text-sm text-slate-500">{t.contactSec.demoNote}</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                          {t.contactSec.company} *
                        </label>
                        <input required className={inputCls} placeholder="广东某某电器有限公司" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                          {t.contactSec.name} *
                        </label>
                        <input required className={inputCls} placeholder="张经理" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                          {t.contactSec.wechat} *
                        </label>
                        <input required className={inputCls} placeholder="138-0000-0000" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                          {t.contactSec.category}
                        </label>
                        <input className={inputCls} placeholder="小家电 / 家居 / 汽配 …" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        {t.contactSec.message}
                      </label>
                      <textarea rows={4} className={inputCls} placeholder="…" />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#D52B1E] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B02418]"
                    >
                      {t.contactSec.submit}
                    </button>
                    <p className="text-center text-[11px] text-slate-400">{t.contactSec.demoNote}</p>
                  </form>
                )}
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-2">
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D52B1E] text-white">
                      <QrCode className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-white">{t.contactSec.wechatLabel}</span>
                  </div>
                  <div className="mx-auto mt-5 flex h-36 w-36 items-center justify-center rounded-xl bg-white/90">
                    <QrCode className="h-28 w-28 text-slate-800" strokeWidth={1} />
                  </div>
                </div>
                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span>{t.contactSec.emailLabel}: {t.contactSec.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span>{t.contactSec.phoneLabel}: {t.contactSec.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span>{t.contactSec.hoursLabel}: {t.contactSec.hours}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070B16] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
            <Logo light />
            <p className="max-w-md text-center text-xs leading-relaxed text-slate-500 lg:text-left">
              {t.footer.desc}
            </p>
          </div>
          <div className="text-center text-xs text-slate-600 lg:text-right">
            <p>© 2026 {t.brand} {t.brandSuffix}. {t.footer.rights}</p>
            <p className="mt-1">{t.footer.icp}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
