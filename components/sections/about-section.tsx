"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { number: "1", title: "Intent Intelligence Engine™" },
    { number: "2", title: "Sovereign Deal Infrastructure" },
    { number: "3", title: "Deal Velocity Protocol" },
  ]

  const content = {
    0: {
      title: "Intent Intelligence Engine™",
      sections: [
        {
          heading: "What:",
          text: "A sector-specific intelligence system that maps your ICP, past deal wins, procurement triggers, and real-time market intent signals to identify buyers who are already primed for your solution.",
        },
        {
          heading: "Why:",
          text: "Executives don’t respond to cold pitches — they respond to aligned timing and relevance. We eliminate 90% of wasted conversations by targeting only where budget, interest, and mandates already exist.",
        },
        {
          heading: "How:",
          text: "Proprietary scraping, mandate tracking, vertical research, and pattern-matching across past deals + live market signals to surface true enterprise buying opportunities.",
        },
      ],
    },
    1: {
      title: "Sovereign Deal Infrastructure",
      sections: [
        {
          heading: "What:",
          text: "A fully isolated GTM architecture (subdomains, mail servers, authentication, warming, reputation layers) that runs separate from your main org.",
        },
        {
          heading: "Why:",
          text: "Enterprise outreach requires clean deliverability and high-trust sending patterns. Most agencies tank your domain reputation. We protect yours completely — and run a high-performance outbound engine on ours.",
        },
        {
          heading: "How:",
          text: "Private infra, deliverability engineering, enterprise authentication, multi-channel routing (email, LinkedIn, SMS, calls) — all built and maintained by us.",
        },
        {
          heading: "Result:",
          text: "Your team gets predictable deal flow with zero operational risk to your main domain.",
        },
      ],
    },
    2: {
      title: "Deal Velocity Protocol",
      sections: [
        {
          heading: "What:",
          text: "A full-cycle system that accelerates deals from \"intro call\" to \"board-level decision,\" including message refinement, prep alignment, follow-up orchestration, and materials transfer.",
        },
        {
          heading: "Why:",
          text: "Most outbound agencies stop at \"meeting booked.\" Enterprise deals die in the follow-up. We operate inside the cycle — ensuring momentum and cutting dead time.",
        },
        {
          heading: "How:",
          text: "We refine your executive assets, tailor first-call framing, coordinate next steps, and manage all communication timing based on actual corporate decision workflows.",
        },
        {
          heading: "Outcome:",
          text: "Deals move faster, close at higher rates, and never stall from silence or misalignment.",
        },
      ],
    },
  }

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-screen shrink-0 snap-start flex-col items-start justify-start px-6 pb-32 pt-24 md:px-12 md:pt-24"
    >
      <h2 className="mb-6 font-sans text-2xl font-normal leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        Our Three-Pillar Approach to Increasing Deal Flow
      </h2>

      {/* Tab Buttons */}
      <div className="mb-6 flex w-full flex-col gap-3 md:flex-row">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 rounded-xl px-4 py-3 text-left transition-all duration-300 ${
              activeTab === index
                ? "bg-foreground/10 text-foreground"
                : "bg-foreground/5 text-foreground/70 hover:bg-foreground/8"
            }`}
          >
            <span className="font-sans text-xl font-light text-foreground/40 xl:text-2xl">{tab.number}</span>
            <span className="font-sans text-sm font-normal md:text-base xl:text-lg">{tab.title}</span>
            <svg
              className="ml-auto h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={activeTab === index ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full rounded-xl border border-foreground/20 bg-foreground/5 p-6 backdrop-blur-sm md:p-8">
        <h3 className="mb-4 font-sans text-lg font-normal text-foreground md:text-xl xl:text-2xl 2xl:text-3xl">
          {content[activeTab as keyof typeof content].title}
        </h3>

        <div className="space-y-4">
          {content[activeTab as keyof typeof content].sections.map((section, index) => (
            <p key={index} className="text-base leading-relaxed text-foreground/80 xl:text-lg 2xl:text-xl">
              <span className="font-semibold text-foreground">{section.heading}</span> {section.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
