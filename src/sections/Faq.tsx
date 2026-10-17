import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLang } from '@/i18n'
import { Reveal, SectionHeading } from './shared'

export default function Faq() {
  const { t } = useLang()
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.faqSec.title} />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {t.faqSec.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-slate-200 bg-slate-50/60 px-5"
              >
                <AccordionTrigger className="text-left text-[15px] font-semibold text-slate-900 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
