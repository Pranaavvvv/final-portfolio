import { useLayoutEffect, useEffect, useState, useCallback } from "react"
import AlexMorganDesktopPortfolio from "./AlexMorganDesktop"
import AlexMorganMobilePortfolio from "./AlexMorganMobile"

/* ── Scroll progress bar ── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* ── Back-to-top button ── */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", toggle, { passive: true })
    toggle()
    return () => window.removeEventListener("scroll", toggle)
  }, [])

  const scrollUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <button
      onClick={scrollUp}
      className={`back-to-top ${visible ? "is-shown" : ""}`}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

/* ── Active nav link tracker ── */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most-visible section that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  // Mark active nav links in the DOM
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>("a[href^='#']").forEach((a) => {
      const target = a.getAttribute("href")?.slice(1)
      // Match both desktop (e.g. "about") and mobile (e.g. "mobile-about")
      const matches =
        target === active || target === `mobile-${active}` || `mobile-${target}` === active
      a.classList.toggle("nav-active", matches)
    })
  }, [active])
}

/* ── Parallax for hero elements ── */
function useParallax() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (prefersReduced) return

    const ribbons = document.querySelectorAll<HTMLElement>(
      '[data-name="Ribbon sculpture"]',
    )
    const heroComps = document.querySelectorAll<HTMLElement>(
      '[data-name="Hero composition"]',
    )

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        // Parallax on the ribbon sculpture — moves slower than scroll
        ribbons.forEach((el) => {
          el.style.transform = `translateY(${scrollY * 0.12}px)`
        })
        // Subtle fade-out of the hero as user scrolls down
        heroComps.forEach((el) => {
          const fade = Math.max(0, 1 - scrollY / 900)
          el.style.opacity = String(fade)
          el.style.transform = `translateY(${scrollY * 0.05}px)`
        })
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
}

/* ── Section scroll-triggered reveals (smooth scale + fade) ── */
function useSectionScrollEffects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (prefersReduced) return

    // Add scroll-section class to all major sections
    const sectionIds = [
      "about", "work", "hackathons", "skills", "process", "playground", "notes", "contact",
      "mobile-about", "mobile-work", "mobile-hackathons", "mobile-skills",
      "mobile-process", "mobile-playground", "mobile-notes", "mobile-contact",
    ]
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) el.classList.add("scroll-section")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-in-view")
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    )

    document.querySelectorAll(".scroll-section").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const desktopSections = ["about", "work", "hackathons", "skills", "process", "playground", "notes", "contact"]
  const mobileSections = desktopSections.map((s) => `mobile-${s}`)

  useActiveSection([...desktopSections, ...mobileSections])
  useParallax()
  useSectionScrollEffects()

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("#top")
    if (!root) return

    const revealSelector = [
      '[data-name="Section introduction"]',
      '[data-name="Archive project preview"]',
      '[data-name="Portrait and caption"]',
      '[data-name="Contact composition"]',
    ].join(",")
    const staggerSelector = [
      '[data-name="Project collection"]',
      '[data-name="Hackathon entries"]',
      '[data-name="Skill disciplines"]',
      '[data-name="Process steps"]',
      '[data-name="Visual experiments"]',
      '[data-name="Notebook entries"]',
    ].join(",")

    const revealElements = Array.from(
      root.querySelectorAll<HTMLElement>(revealSelector),
    )
    const staggerGroups = Array.from(
      root.querySelectorAll<HTMLElement>(staggerSelector),
    )
    const heroElements = Array.from(
      root.querySelectorAll<HTMLElement>(
        '[data-name="Navigation"], [data-name="Portfolio masthead"], [data-name="Hero composition"], [data-name="Hero footer"]',
      ),
    )

    revealElements.forEach((element) => element.classList.add("motion-reveal"))
    staggerGroups.forEach((group) => {
      group.classList.add("motion-stagger")
      Array.from(group.children).forEach((child, index) => {
        ;(child as HTMLElement).style.setProperty(
          "--motion-index",
          String(index),
        )
      })
    })
    heroElements.forEach((element, index) => {
      element.classList.add("hero-animate")
      element.style.setProperty("--hero-index", String(index % 4))
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    )
    ;[...revealElements, ...staggerGroups].forEach((element) =>
      observer.observe(element),
    )
    root.classList.add("motion-ready")

    return () => {
      observer.disconnect()
      root.classList.remove("motion-ready")
    }
  }, [])

  return (
    <>
      <ScrollProgressBar />
      <main id="top">
        <div className="portfolio-mobile">
          <AlexMorganMobilePortfolio />
        </div>
        <div className="portfolio-desktop">
          <AlexMorganDesktopPortfolio />
        </div>
      </main>
      <BackToTop />
    </>
  )
}
