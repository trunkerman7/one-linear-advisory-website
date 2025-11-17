"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { number: "1", title: "Solving For Buyer Segment" },
    { number: "2", title: "Solving For Messaging" },
    { number: "4", title: "Solving For Deal Closure" },
  ]

  const content = {
    0: {
      title: "Solving For Buyer Segment",
      sections: [
        {
          heading: "Material Refinement:",
          text: "Sharpening your value proposition and sales assets from pitch decks to outreach copy to ensure they land with your target decision-makers.",
        },
        {
          heading: "Buyer Outreach:",
          text: "Executing data-driven multi-channel campaigns (email, LinkedIn, calls) to reach the exact executives who control budgets and buying authority.",
        },
        {
          heading: "Strategic Presentations:",
          text: "Driving qualified conversations and setting the stage for sales meetings that articulate your value clearly to enterprise prospects.",
        },
        {
          heading: "Pipeline Management:",
          text: "Tracking responses, managing follow-ups, and ensuring prospects have the clarity and confidence to progress through the sales cycle.",
        },
      ],
    },
    1: {
      title: "Solving For Messaging",
      sections: [
        {
          heading: "Content Strategy:",
          text: "Developing compelling messaging that resonates with your target audience and communicates your value proposition effectively.",
        },
      ],
    },
    2: {
      title: "Solving For Deal Closure",
      sections: [
        {
          heading: "Sales Enablement:",
          text: "Providing your team with the tools and resources needed to close deals effectively and efficiently.",
        },
      ],
    },
  }

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-screen shrink-0 snap-start flex-col items-start justify-start px-6 pb-32 pt-24 md:px-12 md:pt-24"
    >
      <h2 className="mb-6 font-sans text-2xl font-normal leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
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
            <span className="font-sans text-xl font-light text-foreground/40">{tab.number}</span>
            <span className="font-sans text-sm font-normal md:text-base">{tab.title}</span>
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
        <h3 className="mb-4 font-sans text-lg font-normal text-foreground md:text-xl">
          {content[activeTab as keyof typeof content].title}
        </h3>

        <div className="space-y-4">
          {content[activeTab as keyof typeof content].sections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-1 font-sans text-sm font-semibold text-foreground">
                {section.heading}
              </h4>
              <p className="text-sm leading-relaxed text-foreground/80">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
