import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'zh' | 'en'

const zh = {
  brand: '中俄桥',
  brandSuffix: 'SinoBridge',
  nav: {
    services: '服务',
    market: '俄罗斯市场',
    process: '合作流程',
    cases: '成功案例',
    faq: '常见问题',
    cta: '免费评估',
  },
  hero: {
    badge: 'Wildberries · Ozon 一站式出海服务',
    titleA: '让中国工厂的货',
    titleB: '卖遍俄罗斯',
    sub: '入驻开店、物流清关、俄语运营、广告投放——全流程托管，您只管生产。',
    primary: '免费评估我的产品',
    secondary: '了解服务详情',
    trust: ['100+ 合作工厂', '30 天快速入驻', '中俄双语团队'],
    footnote: '市场数据统计为公开报道约数，正式发布前请核实更新。',
    panelLabel: '卖家数据看板（示例界面）',
    todaySales: '今日销售额',
    orders: '今日订单',
    visitors: '店铺访客',
    conversion: '转化率',
    share: '平台销售额占比',
    growth: '较上周同期',
  },
  stats: [
    { value: '1.5亿+', label: '俄罗斯互联网消费者' },
    { value: '5亿+', label: 'Wildberries 月访问量' },
    { value: '5000万+', label: 'Ozon 月活买家' },
    { value: '2448亿美元', label: '2024 年中俄贸易额' },
  ],
  servicesSec: {
    title: '我们能为您做什么',
    sub: '从工厂车间到俄罗斯消费者手中，一站式托管',
    items: [
      { title: '平台入驻与合规', desc: '协助准备主体与类目资质，快速完成 Wildberries / Ozon 卖家入驻。' },
      { title: '店铺日常运营', desc: '俄语 Listing 撰写、图片本地化、定价策略、客服与售后全流程托管。' },
      { title: '物流与清关', desc: '头程运输、俄罗斯海外仓、尾程配送方案设计与物流成本优化。' },
      { title: '品牌与认证', desc: 'EAC 认证、俄罗斯商标备案、品牌旗舰店打造与知识产权保护。' },
      { title: '广告与营销', desc: '平台站内广告代投 + VK / Telegram 社媒网红营销，助力快速起量。' },
      { title: '数据与结算', desc: '销售数据看板、卢布回款与跨境结算合规支持。' },
    ],
  },
  marketSec: {
    title: '为什么是俄罗斯市场？',
    sub: '增长快、格局清晰、中国商品机会巨大的新兴市场',
    items: [
      { title: '庞大的消费市场', desc: '1.5 亿人口，电商渗透率逐年提升，线上消费习惯成熟。' },
      { title: '双寡头格局清晰', desc: 'Wildberries 与 Ozon 占据主要市场份额，平台规则透明，新卖家机会明确。' },
      { title: '供给缺口明显', desc: '西方品牌退出后，高性价比的中国商品需求持续旺盛。' },
      { title: '贸易环境友好', desc: '中俄本币结算通道成熟，跨境物流链路持续优化。' },
    ],
  },
  whySec: {
    title: '为什么选择中俄桥？',
    items: [
      { title: '中国团队，沟通零障碍', desc: '中文对接，可上门拜访工厂，需求响应快。' },
      { title: '俄语本土运营', desc: '深谙两大平台规则与俄语消费者习惯，内容地道。' },
      { title: '一站式托管', desc: '从入驻到回款全程负责，工厂只需专注生产。' },
      { title: '灵活合作模式', desc: '基础服务费 + 销售提成，或纯佣金模式，风险共担。' },
    ],
  },
  processSec: {
    title: '合作流程',
    sub: '五步启动您的俄罗斯电商业务',
    steps: [
      { title: '免费评估', desc: '分析产品与类目竞争度，出具可行性报告。' },
      { title: '签约与合规', desc: '确定合作模式，准备主体与认证资料。' },
      { title: '入驻与备货', desc: '完成平台入驻，制定物流与海外仓方案。' },
      { title: '上架与推广', desc: 'Listing 上线，广告与站外营销启动。' },
      { title: '稳定增长', desc: '数据复盘持续优化，月度经营报告。' },
    ],
  },
  casesSec: {
    title: '成功案例',
    sub: '不同品类工厂的增长路径（示例数据，上线前请替换为真实案例）',
    items: [
      { tag: '小家电工厂 · 广东', desc: '6 个月跻身 Wildberries 品类销量 Top 50，月销突破 500 万人民币。' },
      { tag: '家居用品工厂 · 浙江', desc: 'Ozon 新店 90 天月销破百万卢布，复购率达 35%。' },
      { tag: '汽配工厂 · 江苏', desc: '通过 EAC 认证 + 海外仓布局，退货率降至 3% 以下。' },
    ],
  },
  faqSec: {
    title: '常见问题',
    items: [
      { q: '工厂入驻 Wildberries / Ozon 需要什么资质？', a: '需要营业执照及俄语翻译公证，部分类目需 EAC 认证。我们提供全程资料清单与代办支持。' },
      { q: '网站和店铺部署在中国，需要 ICP 备案吗？', a: '官网如使用中国大陆服务器，需以贵司主体完成 ICP 备案；海外店铺平台不受影响。我们提供备案指引。' },
      { q: '多久能看到销售成果？', a: '通常 30 天完成入驻与首批发货，60–90 天开始起量，具体因品类与客单价而异。' },
      { q: '如何收费？', a: '基础服务费 + 销售提成，或纯佣金模式。签约前出具详细方案，无隐藏费用。' },
      { q: '销售货款如何结算回国？', a: '通过合规跨境结算渠道回款，支持人民币结算，全程留痕可追溯。' },
    ],
  },
  contactSec: {
    title: '预约免费咨询',
    sub: '留下您的信息，1 个工作日内出具产品评估报告',
    company: '公司名称',
    name: '联系人姓名',
    wechat: '微信号 / 电话',
    category: '主营品类',
    message: '需求描述（选填）',
    submit: '提交',
    success: '提交成功！我们会尽快与您联系。',
    demoNote: '演示版表单未接入后端，正式环境将对接企业微信 / 邮件 / CRM。',
    wechatLabel: '微信扫码咨询',
    emailLabel: '商务邮箱',
    hoursLabel: '工作时间',
    phoneLabel: '咨询电话',
    email: 'biz@example.com',
    phone: '+86 138-0000-0000',
    hours: '周一至周五 9:00 – 18:00 (GMT+8)',
  },
  footer: {
    desc: '专注帮助中国工厂通过 Wildberries、Ozon 开拓俄罗斯市场的跨境电商服务商。',
    rights: '版权所有',
    icp: '京ICP备XXXXXXXX号-1（占位，上线前请替换为真实备案号）',
  },
}

const en: typeof zh = {
  brand: 'SinoBridge',
  brandSuffix: '中俄桥',
  nav: {
    services: 'Services',
    market: 'Russian Market',
    process: 'Process',
    cases: 'Case Studies',
    faq: 'FAQ',
    cta: 'Free Assessment',
  },
  hero: {
    badge: 'Wildberries · Ozon full-stack enablement',
    titleA: "From your factory floor to",
    titleB: '150 million Russian consumers',
    sub: 'Onboarding, logistics & customs, Russian-language operations and advertising — fully managed, so you can focus on production.',
    primary: 'Assess my product for free',
    secondary: 'Explore our services',
    trust: ['100+ partner factories', 'Onboarding in 30 days', 'CN–RU bilingual team'],
    footnote: 'Market figures are approximations from public reports — verify before launch.',
    panelLabel: 'Seller dashboard (demo view)',
    todaySales: "Today's sales",
    orders: "Today's orders",
    visitors: 'Store visitors',
    conversion: 'Conversion rate',
    share: 'Sales share by platform',
    growth: 'vs. last week',
  },
  stats: [
    { value: '150M+', label: 'internet consumers in Russia' },
    { value: '500M+', label: 'monthly visits to Wildberries' },
    { value: '50M+', label: 'monthly active buyers on Ozon' },
    { value: '$244.8B', label: 'China–Russia trade volume, 2024' },
  ],
  servicesSec: {
    title: 'What we do for you',
    sub: 'End-to-end, from your workshop to the Russian customer',
    items: [
      { title: 'Onboarding & Compliance', desc: 'We prepare entity and category qualifications and complete Wildberries / Ozon seller onboarding fast.' },
      { title: 'Day-to-day Operations', desc: 'Russian-language listings, localized imagery, pricing, customer service and after-sales — fully managed.' },
      { title: 'Logistics & Customs', desc: 'First-mile shipping, Russian overseas warehouses, last-mile delivery design and cost optimization.' },
      { title: 'Brand & Certification', desc: 'EAC certification, Russian trademark filing, brand flagship stores and IP protection.' },
      { title: 'Ads & Marketing', desc: 'In-platform advertising plus VK / Telegram influencer campaigns to kick-start sales.' },
      { title: 'Data & Settlement', desc: 'Sales dashboards, ruble proceeds repatriation and compliant cross-border settlement.' },
    ],
  },
  marketSec: {
    title: 'Why the Russian market?',
    sub: 'A fast-growing emerging market with a clear structure and huge demand for Chinese goods',
    items: [
      { title: 'Massive consumer base', desc: '150 million people with rising e-commerce adoption and mature online shopping habits.' },
      { title: 'Clear duopoly', desc: 'Wildberries and Ozon hold the dominant share with transparent rules — clear openings for new sellers.' },
      { title: 'Visible supply gap', desc: 'With Western brands gone, demand for cost-effective Chinese products keeps growing.' },
      { title: 'Trade-friendly environment', desc: 'Mature local-currency settlement channels and continuously improving cross-border logistics.' },
    ],
  },
  whySec: {
    title: 'Why SinoBridge?',
    items: [
      { title: 'China-based team, zero language barrier', desc: 'Work in Chinese, on-site factory visits, fast response to your needs.' },
      { title: 'Native Russian operations', desc: 'Deep knowledge of both platforms and Russian consumer habits.' },
      { title: 'One-stop managed service', desc: 'We handle everything from onboarding to payouts — you focus on production.' },
      { title: 'Flexible engagement', desc: 'Base fee plus commission, or pure commission — shared risk, aligned incentives.' },
    ],
  },
  processSec: {
    title: 'How we work',
    sub: 'Five steps to launch your Russia e-commerce business',
    steps: [
      { title: 'Free assessment', desc: 'We analyze your product and category competition, then deliver a feasibility report.' },
      { title: 'Contract & compliance', desc: 'Agree on the engagement model and prepare entity and certification documents.' },
      { title: 'Onboarding & stocking', desc: 'Complete platform onboarding and design logistics / overseas warehouse plans.' },
      { title: 'Launch & promotion', desc: 'Listings go live with advertising and off-platform marketing switched on.' },
      { title: 'Steady growth', desc: 'Continuous data-driven optimization with monthly performance reports.' },
    ],
  },
  casesSec: {
    title: 'Case studies',
    sub: 'Growth paths of factories across categories (sample data — replace with real cases before launch)',
    items: [
      { tag: 'Small home appliances · Guangdong', desc: 'Top 50 in category on Wildberries within 6 months, exceeding RMB 5M in monthly sales.' },
      { tag: 'Household goods · Zhejiang', desc: 'New Ozon store passed 1M rubles monthly sales in 90 days with a 35% repurchase rate.' },
      { tag: 'Auto parts · Jiangsu', desc: 'EAC certification plus overseas warehouse layout cut the return rate below 3%.' },
    ],
  },
  faqSec: {
    title: 'Frequently asked questions',
    items: [
      { q: 'What qualifications does a factory need to sell on Wildberries / Ozon?', a: 'A business license with notarized Russian translation; some categories require EAC certification. We provide a full checklist and handle the paperwork.' },
      { q: 'Is ICP filing required if the site is hosted in mainland China?', a: 'Yes — a website served from mainland China must be filed via your company entity; overseas marketplace stores are unaffected. We provide filing guidance.' },
      { q: 'How soon will we see sales?', a: 'Typically onboarding and first shipment within 30 days, with traction in 60–90 days depending on category and price point.' },
      { q: 'How do you charge?', a: 'Base service fee plus sales commission, or pure commission. A detailed proposal is provided before signing — no hidden costs.' },
      { q: 'How are sales proceeds settled back to China?', a: 'Through compliant cross-border settlement channels, with full traceability, settled in RMB.' },
    ],
  },
  contactSec: {
    title: 'Book a free consultation',
    sub: 'Leave your details — a product assessment report within 1 business day',
    company: 'Company name',
    name: 'Contact person',
    wechat: 'WeChat ID / phone',
    category: 'Main product category',
    message: 'Your needs (optional)',
    submit: 'Submit',
    success: 'Submitted! We will contact you shortly.',
    demoNote: 'Demo form — the production build will connect to WeCom / email / CRM.',
    wechatLabel: 'Scan to chat on WeChat',
    emailLabel: 'Business email',
    hoursLabel: 'Working hours',
    phoneLabel: 'Phone',
    email: 'biz@example.com',
    phone: '+86 138-0000-0000',
    hours: 'Mon–Fri 9:00–18:00 (GMT+8)',
  },
  footer: {
    desc: 'A cross-border e-commerce partner helping Chinese factories enter Russia via Wildberries and Ozon.',
    rights: 'All rights reserved.',
    icp: 'ICP filing No. XXXXXXXX (placeholder — replace with the real filing number)',
  },
}

export const copy: Record<Lang, typeof zh> = { zh, en }

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof zh
}

const LangContext = createContext<LangCtx>({ lang: 'zh', setLang: () => {}, t: zh })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  return (
    <LangContext.Provider value={{ lang, setLang, t: copy[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
