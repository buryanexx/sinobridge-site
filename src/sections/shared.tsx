import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLang } from '@/i18n'

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function SectionHeading({
  title,
  sub,
  dark = false,
}: {
  title: string
  sub?: string
  dark?: boolean
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          {sub}
        </p>
      )}
    </Reveal>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  const { t } = useLang()
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="logo-badge">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 17h16" />
          <path d="M6 17V9l6-4 6 4v8" />
          <path d="M10 17v-4h4v4" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block text-base font-bold ${light ? 'text-white' : 'text-slate-900'}`}>
          {t.brand}
        </span>
        <span className={`block text-[11px] tracking-widest ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          {t.brandSuffix}
        </span>
      </span>
    </a>
  )
}
