import { motion } from 'framer-motion';

const problems = [
  '조회수는 나오는데 구매로 이어지지 않습니다.',
  '광고는 돌리는데 콘텐츠와 판매가 분리되어 있습니다.',
  '숏폼, 인플루언서, 라이브가 각자 따로 운영됩니다.',
];

const flow = [
  {
    title: 'AI 숏폼',
    subtitle: '빠르게 만들고 테스트',
    description: '후킹 중심의 숏폼을 빠르게 제작하고 반응 데이터를 바탕으로 개선합니다.',
  },
  {
    title: '인플루언서',
    subtitle: '신뢰를 만들고 확산',
    description: '상품과 타깃에 맞는 인플루언서 연계를 통해 구매 명분을 강화합니다.',
  },
  {
    title: '라이브 커머스',
    subtitle: '전환을 만드는 마무리',
    description: '라이브로 제품 이해와 구매 결정을 밀어주며 실제 매출 전환까지 연결합니다.',
  },
];

const packages = [
  {
    name: '테스트 패키지',
    price: '70 ~ 150만 원',
    description: '빠르게 반응을 확인하고 싶은 브랜드를 위한 시작 패키지',
    items: ['AI 숏폼 20개', '기본 기획 포함', '2주 테스트 구조'],
  },
  {
    name: '성장 패키지',
    price: '월 200 ~ 400만 원',
    description: '콘텐츠 운영을 꾸준히 돌리며 개선하는 월간 패키지',
    items: ['숏폼 지속 제작', '인플루언서 연계', '콘텐츠 방향 설계'],
  },
  {
    name: '전환 패키지',
    price: '기본 비용 + 매출 수수료',
    description: '매출 전환 구조를 통합적으로 설계하는 핵심 패키지',
    items: ['숏폼 + 인플루언서 + 라이브', '상품/구성 전략', '운영 구조 설계'],
    featured: true,
  },
];

const adCopies = [
  '조회수는 만들지 않습니다. 매출을 만듭니다.',
  '영상 문제 아닙니다. 구조 문제입니다.',
  '숏폼 → 인플루언서 → 라이브, 이렇게 팔립니다.',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-white/65">{description}</p> : null}
    </div>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${className}`}>
      {children}
    </div>
  );
}

function VideoPlaceholder({ className = '', text = 'Video / Image Space', aspectRatio = 'aspect-video' }) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5 ${aspectRatio} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex flex-col items-center gap-3 text-white/40 transition-transform duration-500 group-hover:scale-105 group-hover:text-white/60">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm font-medium tracking-wide text-center px-4">{text}</span>
      </div>
    </div>
  );
}

export default function SalesCutLandingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                SALES CUT · 팔리는 구조를 설계하는 콘텐츠 팀
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                조회수는 만들지 않습니다.
                <br />
                <span className="text-white/70">매출을 만듭니다.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                세일즈컷은 영상을 만드는 팀이 아니라,
                <br className="hidden sm:block" />
                숏폼·인플루언서·라이브를 연결해 <span className="text-white">팔리는 구조</span>를 설계합니다.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-medium text-neutral-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  무료 테스트 신청
                </a>
                <a
                  href="#structure"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                >
                  구조 보기
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group flex flex-col h-full justify-center rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-6 transition-colors duration-500 group-hover:bg-neutral-900">
                <div className="mb-5 text-sm font-medium text-white/50">핵심 메시지</div>
                <div className="space-y-4">
                  {adCopies.map((copy) => (
                    <div key={copy} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-transform duration-300 hover:translate-x-1 hover:border-white/20 hover:bg-white/[0.06]">
                      <p className="text-base leading-7 text-white/90">{copy}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20">
                    <div className="text-2xl font-semibold">AI</div>
                    <div className="mt-1 text-xs text-white/50">빠른 제작</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20">
                    <div className="text-2xl font-semibold">SNS</div>
                    <div className="mt-1 text-xs text-white/50">확산 구조</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20">
                    <div className="text-2xl font-semibold">LIVE</div>
                    <div className="mt-1 text-xs text-white/50">전환 연결</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <VideoPlaceholder text="메인 브랜딩 영상 또는 서비스 하이라이트" className="w-full max-w-5xl mx-auto shadow-2xl shadow-black/40" aspectRatio="aspect-[21/9] sm:aspect-video" />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              eyebrow="Problem"
              title={
                <>
                  영상은 계속 만드는데,
                  <br />
                  매출은 왜 그대로일까요?
                </>
              }
              description="문제는 영상의 개수가 아니라 판매 구조의 연결입니다. 세일즈컷은 콘텐츠를 따로 만들지 않고, 매출로 이어지도록 설계합니다."
            />
          </motion.div>

          <div className="grid gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="p-6">
                  <div className="mb-3 text-sm text-white/40">0{index + 1}</div>
                  <p className="text-lg leading-8 text-white/90">{problem}</p>
                </Card>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="rounded-[1.75rem] border border-white/10 bg-white p-6 text-neutral-950 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
            >
              <div className="mb-3 text-sm text-neutral-500">결론</div>
              <p className="text-xl font-semibold leading-8">영상 문제가 아니라, 구조 문제입니다.</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.32 }}
            >
              <VideoPlaceholder text="문제점 공감 영상 / 실제 사례 비교" aspectRatio="aspect-[4/3] sm:aspect-video" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="structure" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              eyebrow="Structure"
              title="세일즈컷은 콘텐츠를 연결합니다."
              description="AI 숏폼으로 반응을 빠르게 테스트하고, 인플루언서로 신뢰를 만들고, 라이브 커머스로 전환을 마무리합니다."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {flow.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col bg-neutral-900/70 p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="text-sm text-white/40">STEP 0{index + 1}</div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                      {item.subtitle}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 mb-8 text-base leading-7 text-white/65 flex-grow">{item.description}</p>

                  <div className="mt-auto">
                    <VideoPlaceholder text={`${item.title} 예시 이미지/영상`} aspectRatio="aspect-video" className="w-full !rounded-xl" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              eyebrow="Packages"
              title="영상 단가로 이야기하지 않습니다."
              description="세일즈컷의 가격은 영상 개수가 아니라 목표와 운영 구조를 기준으로 설계됩니다."
            />
          </motion.div>
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60">
            제작비가 아니라, 매출을 만드는 비용
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div
                className={`group flex h-full flex-col rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-2 ${pkg.featured
                  ? 'border-white/20 bg-white text-neutral-950 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]'
                  : 'border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                    <p className={`mt-3 text-sm leading-6 ${pkg.featured ? 'text-neutral-600' : 'text-white/60'}`}>
                      {pkg.description}
                    </p>
                  </div>
                  {pkg.featured ? (
                    <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-white">핵심</span>
                  ) : null}
                </div>

                <div className="mt-8 text-2xl font-semibold">{pkg.price}</div>

                <div className="mt-8 space-y-3">
                  {pkg.items.map((item) => (
                    <div
                      key={item}
                      className={`rounded-2xl px-4 py-3 text-sm ${pkg.featured ? 'bg-neutral-950/5' : 'bg-white/[0.04]'}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8"
            >
              <SectionTitle
                eyebrow="Positioning"
                title={
                  <>
                    제작사가 아닙니다.
                    <br />
                    매출 설계팀입니다.
                  </>
                }
              />
              <VideoPlaceholder text="작업 방식 설명 이미지 / 비하인드 씬" aspectRatio="aspect-[4/3] lg:aspect-square" className="max-w-md" />
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['영상', '수단'],
                ['목표', '조회수가 아니라 매출'],
                ['운영', '숏폼부터 라이브까지 연결'],
                ['성과', '전환과 판매 중심'],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="p-6">
                    <div className="text-sm text-white/40">{label}</div>
                    <div className="mt-3 text-xl font-semibold leading-8">{value}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-6 py-14 shadow-2xl shadow-black/20 md:px-12"
        >
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">Contact</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">지금 구조를 진단해드립니다.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            제품, 예산, 운영 방식에 맞춰 세일즈컷이 어떤 방식으로 숏폼과 판매 구조를 연결할 수 있는지 제안합니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@salescut.kr"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              hello@salescut.kr
            </a>
            <a
              href="tel:010-0000-0000"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              010-0000-0000
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
