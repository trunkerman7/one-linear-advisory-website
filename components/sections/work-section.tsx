"use client"

import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { useEffect, useState, useRef } from "react"

export function WorkSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-screen shrink-0 snap-start items-start px-6 pb-32 pt-24 md:px-12 md:pt-24"
    >
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Left Column - Text Content (order-2 on mobile, order-1 on desktop) */}
        <div className="flex flex-col justify-start order-2 lg:order-1">
          <h2 className="mb-5 font-sans text-2xl font-normal leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
            The #1 Metric We Track For Our Partners Success Is Revenue Generated
          </h2>

          <div className="mb-6 space-y-3 text-sm leading-relaxed text-foreground/90">
            <p>
              Onelinear's Revenue Advisory Programme is purpose-built for SMEs, Enterprises and B2Bs seeking to expand beyond their current scope, without unnecessary risk, in the shortest time possible.
            </p>
            <p>
              With three years of experience driving demand, our team blends deep relationships across industry decision makers with a marketing-led approach that unlocks access to hard-to-reach executives worldwide.
            </p>
            <p>
              Using AI-powered intent signal tracking combined with proprietary databases to surface the exact decision-makers, we work with our partners secure deals with businesses actively looking for solutions like yours right now.
            </p>
            <p>
              Our team runs tailored, context-driven outreach to ensure you only speak with executives who fit your ICP and are ready to buy.
            </p>
            <p>
              The result is a predictable growth of revenue through sophisticated marketing capabilities, tailored advisory solutions and seamless process management.
            </p>
          </div>

          <MagneticButton
            size="lg"
            variant="primary"
            className="self-start"
            onClick={() => scrollToSection?.(4)}
          >
            Book a Meeting
          </MagneticButton>
        </div>

        {/* Right Column - Stats Cards (order-1 on mobile, order-2 on desktop) */}
        <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
          <StatCard
            value="$8M+"
            label="Verified Revenue In The Past 12 Months"
            className="col-span-2"
            isVisible={isVisible}
            delay={0}
          />
          <StatCard
            value="200+"
            label="Deals Completed"
            isVisible={isVisible}
            delay={150}
          />
          <StatCard
            value="$100M+"
            label="Pipeline Value Added"
            isVisible={isVisible}
            delay={200}
          />
          <StatCard
            value="10,000+"
            label="Meetings Booked"
            className="col-span-2"
            isVisible={isVisible}
            delay={250}
          />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  value,
  label,
  className = "",
  isVisible,
  delay,
}: {
  value: string
  label: string
  className?: string
  isVisible: boolean
  delay: number
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    // Extract numeric value from string (e.g., "$8M+" -> 8, "10,000+" -> 10000)
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (isNaN(numericValue)) return

    const duration = 4000 // 4 seconds
    const steps = 60 // Number of updates
    const stepDuration = duration / steps
    const increment = numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(numericValue, current + increment)

      if (step >= steps) {
        setDisplayValue(numericValue)
        clearInterval(timer)
      } else {
        setDisplayValue(current)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  // Format the display value to match the original format
  const formatValue = (num: number) => {
    const original = value
    const hasCommas = original.includes(',')
    const hasDecimal = original.includes('.')

    let formatted = hasDecimal ? num.toFixed(1) : Math.round(num).toString()

    if (hasCommas) {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    // Add back prefixes and suffixes (like $, M, +, etc.)
    const prefix = original.match(/^[^0-9]*/)?.[0] || ''
    const suffix = original.match(/[^0-9]*$/)?.[0] || ''

    return `${prefix}${formatted}${suffix}`
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border border-foreground/20 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 md:p-6 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl lg:text-4xl">
        {isVisible ? formatValue(displayValue) : value}
      </div>
      <div className="text-center font-sans text-xs text-foreground/70">
        {label}
      </div>
    </div>
  )
}
