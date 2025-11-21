"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

export function ServicesSection({ caseStudyIndex = 0 }: { caseStudyIndex?: number }) {
  const { ref, isVisible } = useReveal(0.3)
  const [currentIndex, setCurrentIndex] = useState(0)

  const logos = [
    { src: "/Frame 44.svg", fullWhite: false },
    { src: "/Frame 44 (1).svg", fullWhite: true }, // American Express
    { src: "/Frame 44 (2).svg", fullWhite: false }, // Tune.fm
    { src: "/Frame 45.svg", fullWhite: true }, // Charket AI
    { src: "/Frame 45 (1).svg", fullWhite: true }, // HSBC
    { src: "/Frame 45 (2).svg", fullWhite: true }, // MillionWays
    { src: "/Frame 46.svg", fullWhite: true },
    { src: "/Frame 46 (1).svg", fullWhite: true },
    { src: "/Frame 46 (2).svg", fullWhite: true }, // Throne
    { src: "/Frame 47.svg", fullWhite: false },
    { src: "/Frame 47 (1).svg", fullWhite: false },
    { src: "/Frame 47 (2).svg", fullWhite: false },
  ]

  const caseStudies = [
    {
      company: "Kadenwood.",
      headline: "$4M+ in revenue generated for the firm",
      challenge: "Limited investor network constrained large-scale funding rounds and reduced transaction completion rates.",
      solution: "Built a mandate-specific email infrastructure, identified aligned institutional investors, and created a reusable playbook that generated 20–30 qualified investor meetings per month.",
      stats: [
        { value: "$680M+", label: "in active capital raises" },
        { value: "$4M+", label: "in revenue generated for Kadenwood" },
      ],
    },
    {
      company: "Midbridge.",
      headline: "$60M in pipeline value under 30 days",
      challenge: "Calgary-based family office needed to connect with high-quality investment opportunities across multiple sectors.",
      solution: "Connected Midbridge with executives at 10+ companies generating between $1M and $60M+ in annual revenue. The campaign unlocked $60M+ in live deal flow across tech, entertainment, and DevOps.",
      stats: [
        { value: "$60M", label: "in pipeline value added" },
        { value: "23", label: "meetings booked" },
      ],
    },
    {
      company: "Ultimate Ivy League Guide.",
      headline: "$2.7M Annualized Revenue In 6 Months",
      challenge: "Inconsistent lead quality and low conversion rates prevented scaling sales operations effectively.",
      solution: "Implemented data-driven lead scoring system, optimized sales funnel with targeted content, and trained sales team on consultative selling approach.",
      stats: [
        { value: "$2.7M", label: "In New Annualized Revenue" },
        { value: "6", label: "Months To Secure New Annualized Revenue" },
      ],
    },
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-screen shrink-0 snap-start items-start px-6 pb-32 pt-24 md:px-12 md:pt-24"
    >
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Horizontally Sliding Case Studies */}
        <div className="flex flex-col">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="flex min-w-full flex-col justify-start"
                >
                <h3 className="mb-6 font-sans text-lg font-normal text-foreground/80 xl:text-xl 2xl:text-2xl">
                  {caseStudy.company}
                </h3>

                <h2 className="mb-6 font-sans text-2xl font-normal leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {caseStudy.headline}
                </h2>

                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 font-sans text-sm font-semibold text-foreground md:text-base xl:text-lg">Challenge</h4>
                    <p className="text-sm leading-relaxed text-foreground/80 md:text-base xl:text-lg">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-semibold text-foreground md:text-base xl:text-lg">Solution</h4>
                    <p className="text-sm leading-relaxed text-foreground/80 md:text-base xl:text-lg">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex flex-col items-center justify-center rounded-xl border border-foreground/20 bg-foreground/5 p-5 backdrop-blur-sm md:p-6"
                    >
                      <div className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        {stat.value}
                      </div>
                      <div className="text-center font-sans text-xs text-foreground/70 md:text-sm xl:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:bg-foreground/10 hover:scale-110"
            aria-label="Previous case study"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {caseStudies.map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIndex === currentIndex
                    ? "w-8 bg-foreground"
                    : "w-1.5 bg-foreground/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:bg-foreground/10 hover:scale-110"
            aria-label="Next case study"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

        {/* Right Column - Logo Grid */}
        <div className="flex flex-col justify-start">
          <h3 className="mb-6 text-center font-sans text-2xl font-normal text-foreground md:text-3xl lg:text-4xl xl:text-5xl">
            We've Connected Our Clients With:
          </h3>

          <div className="grid grid-cols-4 gap-4">
            {logos.map((logo, index) => (
              <LogoPlaceholder key={index} logo={logo} isVisible={isVisible} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoPlaceholder({
  logo,
  isVisible,
  delay,
}: {
  logo: { src: string; fullWhite: boolean }
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        aspectRatio: '1/1'
      }}
    >
      <img
        src={logo.src}
        alt="Company logo"
        className="h-full w-full object-contain"
        style={{
          filter: logo.fullWhite
            ? 'brightness(0) invert(1)'
            : 'grayscale(100%) invert(1) contrast(1.2) brightness(1.1)'
        }}
      />
    </div>
  )
}
