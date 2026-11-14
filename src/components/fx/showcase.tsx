"use client";

/**
 * The five "engineering" showcase cards, one per main page:
 *   IdeaCompiler    → home hero          StackElements → /blog
 *   SystemBlueprint → /services          DeployConsole → /work
 *   StackOrbit      → /about
 *
 * Every tool named here is in site.techStack or a shipped project's tech list,
 * and every project claim matches src/content/projects.ts. Keep it that way.
 *
 * Mobile / reduced-motion ("lite"): timers, spins and packets never start and
 * each card renders a finished, static state. Same layout, no per-frame work.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LOGO_PATH, LOGO_VIEWBOX } from "@/components/ui/logo";

/* ------------------------------------------------------------------ shared */

const LITE_QUERY = "(pointer: coarse), (max-width: 767px)";

function subscribeLite(cb: () => void) {
  const mql = window.matchMedia(LITE_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

function useLite() {
  const reduce = useReducedMotion();
  const coarse = useSyncExternalStore(
    subscribeLite,
    () => window.matchMedia(LITE_QUERY).matches,
    () => false
  );
  return coarse || !!reduce;
}

function Shell({
  title,
  right,
  children,
  className = "",
}: {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-lime/[0.07] blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-edge bg-surface/90 shadow-[0_24px_70px_-30px_rgb(0_0_0/0.9)] backdrop-blur-sm">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent"
          aria-hidden
        />
        <div className="flex items-center gap-3 border-b border-edge bg-raised/60 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-edge-strong" />
            <span className="size-2.5 rounded-full bg-edge-strong" />
            <span className="size-2.5 rounded-full bg-edge-strong" />
          </div>
          <p className="truncate font-mono text-[11px] text-faint">{title}</p>
          <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-lime">
            {right ?? (
              <>
                <span className="size-1.5 animate-pulse-dot rounded-full bg-lime" />
                live
              </>
            )}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function Typed({ text, speed = 28, still }: { text: string; speed?: number; still: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (still) return;
    const id = setInterval(() => setN((v) => (v >= text.length ? v : v + 1)), speed);
    return () => clearInterval(id);
  }, [text, speed, still]);
  if (still) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, n)}
      <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-lime" aria-hidden />
    </span>
  );
}

/* ---------------------------------------------- IdeaCompiler (home hero) */

const IDEAS = [
  {
    idea: "a car marketplace with live chat",
    stack: ["Flutter", "Firebase", "Real-time chat"],
    out: "iOS · Android",
    like: "Zwipe, live in the UAE",
  },
  {
    idea: "one app for every AI model",
    stack: ["Flutter", "Claude", "GPT", "Gemini", "Grok"],
    out: "iOS · Android",
    like: "Bilge AI, 15,000+ users",
  },
  {
    idea: "job tracking for a field team",
    stack: ["Supabase", "PostgreSQL", "Brevo", "WhatsApp alerts"],
    out: "Web platform",
    like: "Space Maintenance ops, UK",
  },
  {
    idea: "an anti-scam app with AI help",
    stack: ["FlutterFlow", "Cloud Functions", "OpenAI", "RevenueCat"],
    out: "iOS · Android",
    like: "SCAMalicious, 5,000+ downloads",
  },
  {
    idea: "a store for retail and wholesale",
    stack: ["Next.js", "React", "Tailwind", "Multi-currency"],
    out: "Web store",
    like: "Meridian concept store",
  },
];
const IDEA_SECONDS = 6;

/** Types a client's idea, "compiles" it to our stack, and names the real build. */
export function IdeaCompiler({ className }: { className?: string }) {
  const still = useLite();
  const [n, setN] = useState(0);
  const it = IDEAS[n];
  const typed = still ? 0 : it.idea.length * 0.03 + 0.5;
  return (
    <Shell
      className={className}
      title="granyyte ~ idea.compile()"
      right={<>{String(n + 1).padStart(2, "0")} / 05</>}
    >
      <div key={n} className="min-h-[272px] px-5 py-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-faint">your idea</p>
        <div className="mt-2 rounded-xl border border-edge-strong bg-page px-3.5 py-3 font-mono text-[13px] text-fg">
          <span className="text-lime">› </span>
          <Typed key={it.idea} text={it.idea} speed={30} still={still} />
        </div>

        <motion.div
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: typed }}
        >
          <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-faint">
            <span className="h-px flex-1 bg-edge" />
            compiles to
            <span className="h-px flex-1 bg-edge" />
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {it.stack.map((s, i) => (
              <motion.span
                key={s}
                initial={still ? false : { opacity: 0, scale: 0.6, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: typed + 0.15 + i * 0.12, type: "spring", stiffness: 320, damping: 18 }}
                className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 font-mono text-[11px] text-lime"
              >
                {s}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={still ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: typed + 0.9 }}
            className="mt-5 grid grid-cols-2 gap-3 font-mono text-[11px]"
          >
            <div className="rounded-lg border border-edge bg-raised/50 px-3 py-2">
              <p className="text-[9px] uppercase tracking-widest text-faint">ships as</p>
              <p className="mt-0.5 text-fg">{it.out}</p>
            </div>
            <div className="rounded-lg border border-edge bg-raised/50 px-3 py-2">
              <p className="text-[9px] uppercase tracking-widest text-faint">we built one</p>
              <p className="mt-0.5 text-lime">{it.like}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative border-t border-edge bg-raised/40 px-5 py-3.5 font-mono text-[10px] uppercase tracking-widest text-faint">
        {!still && (
          <motion.span
            key={n}
            className="absolute inset-x-0 top-0 h-[2px] origin-left bg-lime"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: IDEA_SECONDS, ease: "linear" }}
            onAnimationComplete={() => setN((v) => (v + 1) % IDEAS.length)}
          />
        )}
        <div className="flex items-center justify-between">
          <span>most builds ship in 2-4 weeks</span>
          <span className="text-lime">idea → live</span>
        </div>
      </div>
    </Shell>
  );
}

/* ------------------------------------------------- DeployConsole (/work) */

const RUNS = [
  {
    tab: "mobile",
    cmd: "granyyte ship --mobile",
    lines: [
      ["flutter → ios · android", "1 codebase"],
      ["flutterflow + custom dart", "certified"],
      ["app store · google play", "published"],
      ["revenuecat · subscriptions", "billing"],
    ],
    done: "live on both stores",
  },
  {
    tab: "web",
    cmd: "granyyte ship --web",
    lines: [
      ["next.js · react · typescript", "typed"],
      ["ssr · structured data · sitemap", "seo"],
      ["tailwind · motion", "fast"],
      ["dashboards · portals · stores", "apps"],
    ],
    done: "deployed · indexed",
  },
  {
    tab: "ai",
    cmd: "granyyte ship --ai",
    lines: [
      ["claude · gpt · gemini · grok", "4 models"],
      ["custom apis · cloud functions", "server-side"],
      ["chat assistants · speech-to-text", "wired"],
      ["one app · four providers", "bilge ai"],
    ],
    done: "assistant online",
  },
  {
    tab: "backend",
    cmd: "granyyte ship --backend",
    lines: [
      ["supabase · postgres · rls", "secure"],
      ["firebase · auth · realtime", "synced"],
      ["node.js · rest apis", "integrated"],
      ["whatsapp + email automation", "brevo"],
    ],
    done: "zero downtime",
  },
] as const;
const RUN_SECONDS = 5.2;

/** The original deploy terminal, now cycling mobile / web / AI / backend runs. */
export function DeployConsole({ className }: { className?: string }) {
  const still = useLite();
  const [run, setRun] = useState(0);
  const r = RUNS[run];
  return (
    <Shell className={className} title={`granyyte@prod ~ deploy ${r.tab}`}>
      <div className="flex border-b border-edge" role="tablist" aria-label="Deploy runs">
        {RUNS.map((x, i) => (
          <button
            key={x.tab}
            type="button"
            role="tab"
            aria-selected={i === run}
            onClick={() => setRun(i)}
            className={`relative flex-1 px-2 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
              i === run ? "bg-lime/[0.06] text-lime" : "text-faint hover:text-muted"
            }`}
          >
            {x.tab}
            {i === run &&
              (still ? (
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-lime" />
              ) : (
                <motion.span
                  key={run}
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-lime"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: RUN_SECONDS, ease: "linear" }}
                  onAnimationComplete={() => setRun((v) => (v + 1) % RUNS.length)}
                />
              ))}
          </button>
        ))}
      </div>
      <div
        key={run}
        className="min-h-[214px] space-y-2 px-4 py-5 font-mono text-[12.5px] leading-relaxed sm:px-5 sm:text-[13px]"
      >
        <div className="flex gap-2.5 text-fg">
          <span className="text-lime">$</span>
          <Typed key={r.cmd} text={r.cmd} still={still} />
        </div>
        {r.lines.map(([text, status], i) => (
          <motion.div
            key={text}
            className="flex items-start gap-2.5"
            initial={still ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.42, duration: 0.3 }}
          >
            <span className="text-faint">▸</span>
            <span className="min-w-0 flex-1 text-muted">{text}</span>
            <span className="shrink-0 rounded-full border border-lime/20 bg-lime/[0.07] px-2 py-0.5 text-[10px] text-lime">
              {status}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="flex gap-2.5 text-lime"
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + r.lines.length * 0.42 + 0.2 }}
        >
          <span>✓</span>
          <span>{r.done}</span>
        </motion.div>
      </div>
      <div className="flex items-center justify-between border-t border-edge bg-raised/40 px-4 py-3.5 font-mono text-[10px] uppercase tracking-widest text-faint sm:px-5">
        <span>2-4 week delivery</span>
        <span className="text-lime">ios · android · web · ai</span>
      </div>
    </Shell>
  );
}

/* --------------------------------------------------- StackOrbit (/about) */

const RINGS = [
  {
    r: 72,
    spin: "animate-[spin_26s_linear_infinite]",
    counter: "animate-[spin_26s_linear_infinite_reverse]",
    tone: "border-lime/50 bg-lime/15 text-lime",
    items: ["Flutter", "FlutterFlow", "Dart", "iOS", "Android"],
  },
  {
    r: 134,
    spin: "animate-[spin_44s_linear_infinite_reverse]",
    counter: "animate-[spin_44s_linear_infinite]",
    tone: "border-sky-400/40 bg-sky-400/10 text-sky-200",
    items: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Firebase", "PostgreSQL"],
  },
  {
    r: 196,
    spin: "animate-[spin_64s_linear_infinite]",
    counter: "animate-[spin_64s_linear_infinite_reverse]",
    tone: "border-violet-400/40 bg-violet-400/10 text-violet-200",
    items: ["Claude", "GPT", "Gemini", "Grok", "RevenueCat", "Brevo", "REST APIs", "Cloud Functions"],
  },
];

/** Radii are in a 460-unit design space and scale with the card (container units). */
const u = (n: number) => `calc(${n} * 100cqw / 460)`;

/** The G at the centre, all 20 tools orbiting in three rings. Hover pauses it. */
export function StackOrbit({ className }: { className?: string }) {
  const still = useLite();
  const paused = "group-hover/orbit:[animation-play-state:paused]";
  return (
    <Shell className={className} title="granyyte ~ stack.orbit" right={<>20 tools · 1 team</>}>
      <div className="group/orbit @container relative aspect-square w-full overflow-hidden bg-dot-grid">
        {RINGS.map((ring, ri) => (
          <div key={ring.r}>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-edge-strong"
              style={{ width: u(ring.r * 2), height: u(ring.r * 2) }}
              aria-hidden
            />
            <div className={`absolute inset-0 ${still ? "" : `${ring.spin} ${paused}`}`}>
              {ring.items.map((item, i) => {
                // Offset each ring so the static (mobile) layout doesn't line chips up
                const a = (360 / ring.items.length) * i + ri * 24;
                return (
                  <div
                    key={item}
                    className="absolute left-1/2 top-1/2 size-0"
                    style={{ transform: `rotate(${a}deg) translateX(${u(ring.r)}) rotate(${-a}deg)` }}
                  >
                    <span
                      className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[9px] backdrop-blur-sm transition-transform duration-300 hover:z-10 hover:scale-125 sm:text-[10px] ${ring.tone} ${
                        still ? "" : `${ring.counter} ${paused}`
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime/50 bg-page shadow-[0_0_40px_-6px_var(--color-lime)] sm:size-16">
          <svg viewBox={LOGO_VIEWBOX} fill="none" className="size-8 text-lime sm:size-9" aria-hidden>
            <path d={LOGO_PATH} stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-edge bg-raised/40 px-4 py-3.5 font-mono text-[9px] uppercase tracking-widest sm:px-5 sm:text-[10px]">
        <span className="text-lime">● mobile</span>
        <span className="text-sky-200">● web + backend</span>
        <span className="text-violet-200">● ai + services</span>
      </div>
    </Shell>
  );
}

/* ------------------------------------------- SystemBlueprint (/services) */

const TOP = [
  { x: 8, label: "iOS app", subs: ["Flutter · Dart"] },
  { x: 160, label: "Android app", subs: ["Flutter · FlutterFlow"] },
  { x: 312, label: "Web app", subs: ["Next.js · React · TS"] },
];
const BOTTOM = [
  { x: 8, label: "Data", subs: ["Supabase · Firebase", "PostgreSQL"] },
  { x: 160, label: "AI models", subs: ["Claude · GPT", "Gemini · Grok"] },
  { x: 312, label: "Services", subs: ["RevenueCat · Brevo", "WhatsApp alerts"] },
];
const WIRES = [
  "M78 86 C78 120, 196 112, 196 146",
  "M230 86 L230 146",
  "M382 86 C382 120, 264 112, 264 146",
  "M196 200 C196 234, 78 226, 78 260",
  "M230 200 L230 260",
  "M264 200 C264 234, 382 226, 382 260",
];

function BlueprintNode({
  x,
  y,
  w,
  h,
  label,
  subs,
  strong,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  subs: string[];
  strong?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        strokeWidth={1}
        className={strong ? "fill-lime/10 stroke-lime/70" : "fill-surface stroke-edge-strong"}
      />
      <text x={x + w / 2} y={y + 22} textAnchor="middle" className="fill-fg font-display text-[12.5px] font-bold">
        {label}
      </text>
      {subs.map((s, i) => (
        <text
          key={s}
          x={x + w / 2}
          y={y + 38 + i * 13}
          textAnchor="middle"
          className="fill-lime font-mono text-[9.5px]"
        >
          {s}
        </text>
      ))}
    </g>
  );
}

/** A live architecture diagram: clients, API, then data / AI / services. */
export function SystemBlueprint({ className }: { className?: string }) {
  const still = useLite();
  return (
    <Shell className={className} title="granyyte ~ system.blueprint" right={<>fig 01 / how we wire it</>}>
      <div className="bg-dot-grid px-2 py-4">
        <svg
          viewBox="0 0 460 340"
          className="w-full"
          role="img"
          aria-label="How we wire a product together: iOS, Android and web apps on top, an API layer in the middle, then data, AI models and services underneath"
        >
          {WIRES.map((d, i) => (
            <g key={d}>
              <path d={d} fill="none" strokeWidth={1.2} strokeDasharray="3 4" className="stroke-edge-strong" />
              {!still && (
                <>
                  <circle r={3} className="fill-lime">
                    <animateMotion dur="2.6s" begin={`${i * 0.43}s`} repeatCount="indefinite" path={d} />
                  </circle>
                  <circle r={7} className="fill-lime" opacity={0.18}>
                    <animateMotion dur="2.6s" begin={`${i * 0.43}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </>
              )}
            </g>
          ))}
          <text x={8} y={20} className="fill-faint font-mono text-[8.5px] uppercase tracking-widest">
            what your users see
          </text>
          {TOP.map((n) => (
            <BlueprintNode key={n.label} x={n.x} y={34} w={140} h={52} label={n.label} subs={n.subs} />
          ))}
          <BlueprintNode
            x={100}
            y={146}
            w={260}
            h={54}
            label="API layer"
            subs={["Node.js · Cloud Functions · REST APIs"]}
            strong
          />
          <text x={8} y={252} className="fill-faint font-mono text-[8.5px] uppercase tracking-widest">
            behind the scenes
          </text>
          {BOTTOM.map((n) => (
            <BlueprintNode key={n.label} x={n.x} y={260} w={140} h={68} label={n.label} subs={n.subs} />
          ))}
        </svg>
      </div>
      <div className="flex items-center justify-between border-t border-edge bg-raised/40 px-4 py-3.5 font-mono text-[10px] uppercase tracking-widest text-faint sm:px-5">
        <span>one team, every layer</span>
        <span className="text-lime">you own all of it</span>
      </div>
    </Shell>
  );
}

/* --------------------------------------------------- StackElements (home) */

type El = { s: string; name: string; use: string; g: 0 | 1 | 2 | 3 };
const ELEMENTS: El[] = [
  { s: "Fl", name: "Flutter", use: "one codebase for iOS and Android", g: 0 },
  { s: "Ff", name: "FlutterFlow", use: "certified, for the fastest builds", g: 0 },
  { s: "Da", name: "Dart", use: "custom code where visual tools stop", g: 0 },
  { s: "iO", name: "iOS", use: "published to the App Store", g: 0 },
  { s: "An", name: "Android", use: "published to Google Play", g: 0 },
  { s: "Nx", name: "Next.js", use: "fast, SEO-first websites and web apps", g: 1 },
  { s: "Re", name: "React", use: "interfaces for dashboards and portals", g: 1 },
  { s: "Ts", name: "TypeScript", use: "typed code that's safer to change", g: 1 },
  { s: "Tw", name: "Tailwind", use: "consistent design without CSS sprawl", g: 1 },
  { s: "No", name: "Node.js", use: "APIs and server-side logic", g: 1 },
  { s: "Sb", name: "Supabase", use: "database, auth and row-level security", g: 2 },
  { s: "Pg", name: "PostgreSQL", use: "the data layer you own outright", g: 2 },
  { s: "Fb", name: "Firebase", use: "auth, realtime data and push", g: 2 },
  { s: "Cf", name: "Cloud Functions", use: "server logic without servers to manage", g: 2 },
  { s: "Ap", name: "REST APIs", use: "connecting the tools you already use", g: 2 },
  { s: "Cl", name: "Claude", use: "AI assistants and analysis", g: 3 },
  { s: "Gp", name: "GPT", use: "chat and content features", g: 3 },
  { s: "Ge", name: "Gemini", use: "multi-model AI apps", g: 3 },
  { s: "Gr", name: "Grok", use: "the fourth model inside Bilge AI", g: 3 },
  { s: "Rc", name: "RevenueCat", use: "subscriptions on both app stores", g: 3 },
];
const GROUPS = [
  { label: "mobile", idle: "text-lime/80", ring: "border-lime/25" },
  { label: "web", idle: "text-sky-300/80", ring: "border-sky-400/25" },
  { label: "backend", idle: "text-amber-300/80", ring: "border-amber-400/25" },
  { label: "ai + billing", idle: "text-violet-300/80", ring: "border-violet-400/25" },
];

/** Twenty tools as element tiles. A highlight scans them; hover or tap to inspect. */
export function StackElements({ className }: { className?: string }) {
  const still = useLite();
  const [active, setActive] = useState(0);
  const hovering = useRef(false);
  useEffect(() => {
    if (still) return;
    const id = setInterval(() => {
      if (!hovering.current) setActive((v) => (v + 1) % ELEMENTS.length);
    }, 1300);
    return () => clearInterval(id);
  }, [still]);
  const el = ELEMENTS[active];
  return (
    <Shell
      className={className}
      title="granyyte ~ stack.elements"
      right={<>{String(active + 1).padStart(2, "0")} / 20</>}
    >
      <div
        className="grid grid-cols-5 gap-1.5 p-3 sm:p-4"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
        {ELEMENTS.map((e, i) => {
          const on = i === active;
          return (
            <button
              key={e.s}
              type="button"
              aria-label={`${e.name}: ${e.use}`}
              aria-pressed={on}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`relative aspect-square rounded-lg border p-1.5 text-left transition-all duration-300 ${
                on
                  ? "z-10 scale-110 border-lime bg-lime text-ink shadow-[0_0_26px_-4px_var(--color-lime)]"
                  : `bg-raised/60 ${GROUPS[e.g].ring} ${GROUPS[e.g].idle}`
              }`}
            >
              <span className={`block font-mono text-[8px] ${on ? "text-ink/60" : "text-faint"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="block font-display text-lg font-bold leading-none sm:text-xl">{e.s}</span>
              <span
                className={`absolute inset-x-1.5 bottom-1 truncate font-mono text-[7.5px] ${
                  on ? "text-ink/70" : "text-faint"
                }`}
              >
                {e.name}
              </span>
            </button>
          );
        })}
      </div>
      <div className="min-h-[68px] border-t border-edge bg-raised/40 px-4 py-3.5 sm:px-5">
        <motion.p
          key={el.s}
          initial={still ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[12px] leading-relaxed text-muted"
        >
          <span className="text-lime">{el.name}</span>
          <span className="text-faint"> / {GROUPS[el.g].label}</span>
          <br />
          {el.use}
        </motion.p>
      </div>
    </Shell>
  );
}
