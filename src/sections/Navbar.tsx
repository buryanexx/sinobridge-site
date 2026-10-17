import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useLang, type Lang } from '@/i18n'
import { Logo } from './shared'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#market', label: t.nav.market },
    { href: '#process', label: t.nav.process },
    { href: '#cases', label: t.nav.cases },
    { href: '#faq', label: t.nav.faq },
  ]

  const switcher = (compact = false) => (
    <div
      className={`flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold ${
        compact ? '' : ''
      }`}
    >
      {(['zh', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          {l === 'zh' ? '中' : 'EN'}
        </button>
      ))}
    </div>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo light />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {switcher()}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#D52B1E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#B02418]"
          >
            {t.nav.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          {switcher(true)}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-200 hover:bg-white/10"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0B1020] px-4 pb-4 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-slate-200 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-[#D52B1E] px-4 py-2.5 text-sm font-semibold text-white"
          >
            {t.nav.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}
