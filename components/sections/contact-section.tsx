"use client"

import { Mail, MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useEffect } from "react"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "intro-call", {origin:"https://app.cal.com"});

      Cal.ns["intro-call"]("inline", {
        elementOrSelector:"#my-cal-inline-intro-call",
        config: {"layout":"month_view"},
        calLink: "charles-leung-zz8p9i/intro-call",
      });

      Cal.ns["intro-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-screen shrink-0 snap-start flex-col items-start justify-start px-6 pb-32 pt-24 md:px-12 md:pt-24"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 items-start">
          <div className="flex flex-col justify-start pr-4 md:pr-8">
            <div
              className={`mb-6 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-2xl font-normal leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl xl:text-5xl">
                Let's Talk About Your Business Development
              </h2>
              <p className="font-sans text-sm text-foreground/60 md:text-base xl:text-lg">/ Schedule an introductory call to see if you are a good fit for our advisory.</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="mailto:hello@onelinear.com"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-foreground xl:h-4 xl:w-4" />
                  <span className="font-sans text-xs text-foreground xl:text-sm">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl xl:text-3xl">
                  hello@onelinear.com
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-foreground xl:h-4 xl:w-4" />
                  <span className="font-sans text-xs text-foreground xl:text-sm">Location</span>
                </div>
                <p className="text-base text-foreground md:text-2xl xl:text-3xl">London, UK</p>
              </div>
            </div>
          </div>

          {/* Right side - Calendar embed container */}
          <div
            className={`flex flex-col justify-start transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="h-[600px] w-[calc(100%+160px)] -ml-[160px] overflow-hidden rounded-xl bg-transparent backdrop-blur-sm md:h-[650px]">
              <div id="my-cal-inline-intro-call" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
