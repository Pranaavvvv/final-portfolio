import { useState } from "react"
import imgRibbonSculpture from "./assets/alex-mobile/e7e0a.png"
import imgEditorialPhotograph from "./assets/image.png"
import imgEditorialPhotograph1 from "./assets/codebase-visualization-cover.svg"
import imgAuraGroundPreview from "./assets/alex-mobile/8e38a.png"
import imgEditorialPhotograph2 from "./assets/alex-mobile/970ac.png"
import imgMenu from "./assets/alex-mobile/a4133.svg"
import imgArrowUpRight from "./assets/alex-mobile/774e5.svg"
import imgStatusMarker from "./assets/alex-mobile/0c75b.svg"
import imgArrowUpRight1 from "./assets/alex-mobile/6933d.svg"

export default function AlexMorganMobilePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-node-id="1:2"
      data-name="Pranav Dharwadkar — Mobile portfolio"
    >
      <div
        className="content-stretch flex flex-col items-start overflow-clip px-[24px] relative shrink-0 w-full min-h-screen"
        data-node-id="1:3"
        data-name="Introduction"
      >
        <div
          className="border-[#dedfd9] border-b border-solid content-stretch flex h-[88px] items-center justify-between overflow-clip relative shrink-0 w-full"
          data-node-id="1:4"
          data-name="Navigation"
        >
          <div
            className="[word-break:break-word] content-stretch flex gap-[10px] items-center leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap"
            data-node-id="1:5"
            data-name="Identity"
          >
            <p
              className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#294beb] text-[34px]"
              data-node-id="1:6"
            >
              a.
            </p>
            <p
              className="font-['Inter:Medium'] font-medium not-italic relative shrink-0 text-[#242522] text-[14px]"
              data-node-id="1:7"
            >
              Pranav Dharwadkar
            </p>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative shrink-0 size-[24px]"
            data-node-id="1:8"
            data-name="menu"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgMenu}
            />
          </button>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-[#dedfd9] border-b border-solid flex flex-wrap gap-x-[24px] gap-y-[12px] pb-[24px] pt-[20px] w-full"
          >
            <a
              className="font-['Inter:Medium'] text-[#242522] text-[14px]"
              href="#mobile-about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className="font-['Inter:Medium'] text-[#242522] text-[14px]"
              href="#mobile-work"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </a>
            <a
              className="font-['Inter:Medium'] text-[#242522] text-[14px]"
              href="#mobile-hackathons"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              className="font-['Inter:Medium'] text-[#242522] text-[14px]"
              href="#mobile-skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              className="font-['Inter:Medium'] text-[#294beb] text-[14px]"
              href="#mobile-contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk ↗
            </a>
          </nav>
        )}
        <div
          className="[word-break:break-word] content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] not-italic overflow-clip pb-[30px] pt-[28px] relative shrink-0 text-[#777872] text-[9px] w-full whitespace-nowrap"
          data-node-id="1:10"
          data-name="Portfolio masthead"
        >
          <p className="relative shrink-0 tracking-[0.7px]" data-node-id="1:11">
            AI/ML × SOFTWARE ENGINEERING
          </p>
          <p className="relative shrink-0" data-node-id="1:12">
            PORTFOLIO / 2026
          </p>
        </div>
        <div
          className="content-stretch flex flex-col min-h-[580px] items-start relative shrink-0 w-full"
          data-node-id="1:13"
          data-name="Hero composition"
        >
          <p
            className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0.98] left-0 not-italic right-0 text-[#242522] text-[49px] top-0 tracking-[-3px]"
            data-node-id="1:14"
          >
            A little curious.
          </p>
          <p
            className="[word-break:break-word] absolute font-['Bodoni_Moda:Italic'] font-normal italic leading-[1.02] left-0 text-[#242522] text-[54px] top-[60px] tracking-[-3px] w-[342px]"
            data-node-id="1:15"
          >
            A lot of possibility.
          </p>
          <div
            className="absolute h-[240px] left-[10px] top-[150px] w-[280px] pointer-events-none z-10"
            data-node-id="1:16"
            data-name="Ribbon sculpture"
          >
            <img
              alt="Metallic ribbon sculpture"
              className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
              src={imgRibbonSculpture}
              onError={(e) => {
                const el = e.currentTarget
                const step = Number(el.dataset.fallbackStep || "0")
                const fallbacks = ["./assets/alex-mobile/e7e0a.png", "/assets/alex-mobile/e7e0a.png", "assets/alex-mobile/e7e0a.png"]
                if (step < fallbacks.length) {
                  el.dataset.fallbackStep = String(step + 1)
                  el.src = fallbacks[step]
                }
              }}
            />
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[390px] w-full max-w-[320px]"
            data-node-id="1:17"
            data-name="Personal introduction"
          >
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#777872] text-[15px] w-[min-content]"
              data-node-id="1:18"
            >
              I’m Pranav. I build intelligent systems, resilient applications,
              and developer tools — from research prototypes to production-ready
              platforms.
            </p>
            <div
              className="bg-[#294beb] content-stretch flex gap-[24px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[100px] shrink-0"
              data-node-id="1:19"
              data-name="Action"
            >
              <p
                className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                data-node-id="1:20"
              >
                Explore my work
              </p>
              <div
                className="relative shrink-0 size-[17px]"
                data-node-id="1:21"
                data-name="arrow-up-right"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowUpRight}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-[#dedfd9] border-solid border-t content-stretch flex h-[76px] items-center justify-between overflow-clip relative shrink-0 w-full"
          data-node-id="1:23"
          data-name="Hero footer"
        >
          <div
            className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0"
            data-node-id="1:24"
            data-name="Availability"
          >
            <div
              className="relative shrink-0 size-[6px]"
              data-node-id="1:25"
              data-name="Status marker"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgStatusMarker}
              />
            </div>
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[9px] whitespace-nowrap"
              data-node-id="1:26"
            >
              OPEN TO GOOD CONVERSATIONS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#242522] text-[10px] whitespace-nowrap"
            data-node-id="1:27"
          >
            ↓
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[24px] py-[72px] relative shrink-0 w-full"
        id="mobile-about"
        data-node-id="1:28"
        data-name="About me"
      >
        <div
          className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:29"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:30"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:31"
            >
              01
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:32"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:33"
            >
              ENGINEER, RESEARCHER, AND BUILDER
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
            data-node-id="1:34"
          >
            Hello, I’m Pranav.
          </p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:35"
          data-name="About composition"
        >
          <div
            className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="1:36"
            data-name="Portrait and caption"
          >
            <div
              className="h-[320px] relative shrink-0 w-full"
              data-node-id="1:37"
              data-name="Editorial photograph"
            >
              <img
                alt="Pranav Dharwadkar portrait"
                className="absolute inset-0 max-w-none object-cover object-top pointer-events-none size-full"
                src={imgEditorialPhotograph}
                onError={(e) => {
                  const el = e.currentTarget
                  const step = Number(el.dataset.fallbackStep || "0")
                  const fallbacks = ["./image.png", "/image.png", "image.png"]
                  if (step < fallbacks.length) {
                    el.dataset.fallbackStep = String(step + 1)
                    el.src = fallbacks[step]
                  }
                }}
              />
            </div>
            <div
              className="[word-break:break-word] content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#777872] text-[9px] w-full whitespace-nowrap"
              data-node-id="1:38"
              data-name="Portrait caption"
            >
              <p className="relative shrink-0" data-node-id="1:39">
                FIG. 02 / THE HUMAN SIDE
              </p>
              <p className="relative shrink-0" data-node-id="1:40">
                PORTFOLIO PORTRAIT
              </p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start not-italic overflow-clip relative shrink-0 w-full"
            data-node-id="1:41"
            data-name="Biography"
          >
            <p
              className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[#242522] text-[27px] tracking-[-1.3px] w-full"
              data-node-id="1:42"
            >
              <span className="leading-[1.3]">{`Somewhere between `}</span>
              <span className="font-['Bodoni_Moda:Italic'] italic leading-[1.3]">
                “what if?”
              </span>
              <span className="leading-[1.3]">{` and `}</span>
              <span className="font-['Bodoni_Moda:Italic'] italic leading-[1.3]">
                “it works.”
              </span>
              <span className="leading-[1.3]">{` That’s where I like to be.`}</span>
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] relative shrink-0 text-[#777872] text-[15px] w-full"
              data-node-id="1:43"
            >
              I’m a creative developer exploring the space between useful
              software and expressive design. I enjoy building for the web,
              getting a little lost in an idea, and finding the simplest way
              through it.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] relative shrink-0 text-[#777872] text-[15px] w-full"
              data-node-id="1:44"
            >
              Away from the screen: sketchbooks, long walks, second-hand
              bookshops, and noticing the details most people walk past.
            </p>
            <div
              className="border-[#dedfd9] border-solid border-t content-stretch flex gap-[30px] items-start leading-[normal] overflow-clip pt-[16px] relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:45"
              data-name="Personal details"
            >
              <div
                className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0"
                data-node-id="1:46"
                data-name="Personal detail"
              >
                <p
                  className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                  data-node-id="1:47"
                >
                  BASED IN
                </p>
                <p
                  className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[13px]"
                  data-node-id="1:48"
                >
                  Your city, Earth
                </p>
              </div>
              <div
                className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0"
                data-node-id="1:49"
                data-name="Personal detail"
              >
                <p
                  className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                  data-node-id="1:50"
                >
                  CURRENTLY
                </p>
                <p
                  className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[13px]"
                  data-node-id="1:51"
                >
                  Learning by making
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[32px] items-start pb-[64px] pt-[24px] px-[24px] relative shrink-0 w-full"
        id="mobile-work"
        data-node-id="1:52"
        data-name="Featured project"
      >
        <div
          className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:53"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:54"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:55"
            >
              02
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:56"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:57"
            >
              SELECTED ENGINEERING PROJECTS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
            data-node-id="1:58"
          >
            Systems built to think.
          </p>
        </div>
        <div
          className="bg-[#f4f4f0] content-stretch flex flex-col h-[330px] items-start justify-center p-[20px] relative shrink-0 w-full"
          data-node-id="1:59"
          data-name="Archive project preview"
        >
          <div
            className="bg-white border border-[#dedfd9] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-full"
            data-node-id="1:60"
            data-name="Forma application"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:61"
              data-name="Application navigation"
            >
              <p
                className="font-['Bodoni_Moda:Regular'] font-normal relative shrink-0 text-[#242522] text-[20px]"
                data-node-id="1:62"
              >
                ka-chow.
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#777872] text-[7px]"
                data-node-id="1:63"
              >
                AUTONOMOUS ENGINEERING BRAIN
              </p>
            </div>
            <div
              className="content-stretch flex items-end overflow-clip relative shrink-0 w-full"
              data-node-id="1:64"
              data-name="Archive heading"
            >
              <div
                className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[#242522] text-[27px] tracking-[-1px]"
                data-node-id="1:65"
              >
                <p className="leading-[1.04] mb-0">A live map of your</p>
                <p className="leading-[1.04]">entire codebase.</p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:66"
              data-name="Archive collection"
            >
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative"
                data-node-id="1:67"
                data-name="Collection object"
              >
                <div
                  className="h-[107px] relative shrink-0 w-full"
                  data-node-id="1:68"
                  data-name="Editorial photograph"
                >
                  <img
                    alt="KA-CHOW codebase knowledge graph visualization"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgEditorialPhotograph1}
                  />
                </div>
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[6px] whitespace-nowrap"
                  data-node-id="1:69"
                >{`01 / CODE KNOWLEDGE GRAPH`}</p>
              </div>
              <div
                className="[word-break:break-word] bg-[#edf0ff] content-stretch flex flex-col gap-[8px] h-[107px] items-center justify-center leading-[normal] overflow-clip relative shrink-0 text-[#294beb] w-[92px] whitespace-nowrap"
                data-node-id="1:70"
                data-name="Typography collection"
              >
                <p
                  className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[51px]"
                  data-node-id="1:71"
                >
                  Aa
                </p>
                <p
                  className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[5px]"
                  data-node-id="1:72"
                >
                  ARCHITECTURE AT A GLANCE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full"
          data-node-id="1:73"
          data-name="Featured project details"
        >
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
            data-node-id="1:74"
            data-name="Project information"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px not-italic relative"
              data-node-id="1:75"
              data-name="Project description"
            >
              <p
                className="font-['Inter:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#242522] text-[26px] tracking-[-1px] w-full"
                data-node-id="1:76"
              >
                KA-CHOW — The autonomous engineering brain
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] leading-[1.6] relative shrink-0 text-[#777872] text-[10px] w-full whitespace-pre-wrap"
                data-node-id="1:77"
              >
                01 / GO • PYTHON • DOCKER • KUBERNETES • CI/CD • GITHUB ↗
              </p>
            </div>
            <div
              className="border border-[#dedfd9] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[44px]"
              data-node-id="1:78"
              data-name="Project link"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-node-id="1:79"
                data-name="arrow-up-right"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowUpRight1}
                />
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[15px] w-full"
            data-node-id="1:81"
          >
            Architected live codebase knowledge graphs that save up to 10 hours
            of setup, an API-aware “What-If” analyzer for CI/CD, and a
            self-healing patcher that opens GitHub pull requests.
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[72px] px-[24px] relative shrink-0 w-full"
        data-node-id="1:82"
        data-name="More selected projects"
      >
        <div
          className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:83"
          data-name="Project collection"
        >
          <div
            className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
            data-node-id="1:84"
            data-name="Aura ground project"
          >
            <div
              className="bg-[#f4f4f0] content-stretch flex flex-col h-[330px] items-start p-[28px] relative shrink-0 w-full"
              data-node-id="1:85"
              data-name="Aura ground preview"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgAuraGroundPreview}
              />
              <div
                className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[14px] items-start p-[22px] relative shrink-0 w-[245px]"
                data-node-id="1:87"
                data-name="Place discovery card"
              >
                <p
                  className="font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[8px] whitespace-nowrap"
                  data-node-id="1:88"
                >
                  DISASTER RELIEF, OFFLINE.
                </p>
                <div
                  className="font-['Bodoni_Moda:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[#242522] text-[36px] w-[min-content]"
                  data-node-id="1:89"
                >
                  <p className="leading-[1.02] mb-0">Aura</p>
                  <p className="leading-[1.02]">Net.</p>
                </div>
                <div
                  className="border border-[#dedfd9] border-solid content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic overflow-clip p-[12px] relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="1:90"
                  data-name="Discovery search"
                >
                  <p
                    className="relative shrink-0 text-[#777872] text-[9px]"
                    data-node-id="1:91"
                  >
                    Coordinate the next response
                  </p>
                  <p
                    className="relative shrink-0 text-[#294beb] text-[12px]"
                    data-node-id="1:92"
                  >
                    ↗
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-node-id="1:93"
              data-name="Project information"
            >
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px not-italic relative"
                data-node-id="1:94"
                data-name="Project description"
              >
                <p
                  className="font-['Inter:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#242522] text-[26px] tracking-[-1px] w-full"
                  data-node-id="1:95"
                >
                  AuraNet — Disaster resilience network
                </p>
                <p
                  className="font-['IBM_Plex_Mono:Regular'] leading-[1.6] relative shrink-0 text-[#777872] text-[10px] w-full"
                  data-node-id="1:96"
                >
                  02 / PYTHON • REACT NATIVE • BLE • GITHUB ↗
                </p>
              </div>
              <div
                className="border border-[#dedfd9] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[44px]"
                data-node-id="1:97"
                data-name="Project link"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="1:98"
                  data-name="arrow-up-right"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowUpRight1}
                  />
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[14px] w-full"
              data-node-id="1:100"
            >
              Processes live weather data to route up to 50 volunteers, while a
              custom offline BLE mesh connects up to 15 mobile clients and
              improves simulated crisis response times by 40%.
            </p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="1:101"
            data-name="NeuralFlow — Autonomous AutoML orchestrator project"
          >
            <div
              className="bg-[#edf0ff] content-stretch flex flex-col h-[330px] items-center justify-center overflow-clip p-[32px] relative shrink-0 w-full"
              data-node-id="1:102"
              data-name="NeuralFlow — Autonomous AutoML orchestrator preview"
            >
              <div
                className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[28px] relative shrink-0 w-[230px]"
                data-node-id="1:103"
                data-name="Focus application"
              >
                <div
                  className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="1:104"
                  data-name="App header"
                >
                  <p
                    className="relative shrink-0 text-[#242522] text-[11px]"
                    data-node-id="1:105"
                  >
                    NeuralFlow
                  </p>
                  <p
                    className="relative shrink-0 text-[#294beb] text-[12px]"
                    data-node-id="1:106"
                  >
                    ✳
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[8px] whitespace-nowrap"
                  data-node-id="1:107"
                >
                  ONE PIPELINE AT A TIME.
                </p>
                <p
                  className="[word-break:break-word] font-['Bodoni_Moda:Regular'] font-normal leading-none relative shrink-0 text-[#294beb] text-[54px] whitespace-nowrap"
                  data-node-id="1:108"
                >
                  24:59
                </p>
                <div
                  className="bg-[#edf0ff] h-[2px] relative shrink-0 w-full"
                  data-node-id="1:109"
                  data-name="Session progress"
                />
                <div
                  className="bg-[#294beb] content-stretch flex items-start justify-center overflow-clip p-[12px] relative shrink-0 w-full"
                  data-node-id="1:110"
                  data-name="Timer action"
                >
                  <p
                    className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap"
                    data-node-id="1:111"
                  >
                    Run autonomous workflow
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-node-id="1:112"
              data-name="Project information"
            >
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px not-italic relative"
                data-node-id="1:113"
                data-name="Project description"
              >
                <p
                  className="font-['Inter:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#242522] text-[26px] tracking-[-1px] w-full"
                  data-node-id="1:114"
                >
                  NeuralFlow — Autonomous AutoML orchestrator
                </p>
                <p
                  className="font-['IBM_Plex_Mono:Regular'] leading-[1.6] relative shrink-0 text-[#777872] text-[10px] w-full"
                  data-node-id="1:115"
                >
                  03 / FASTAPI • LANGGRAPH • CELERY • GITHUB ↗
                </p>
              </div>
              <div
                className="border border-[#dedfd9] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[44px]"
                data-node-id="1:116"
                data-name="Project link"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="1:117"
                  data-name="arrow-up-right"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowUpRight1}
                  />
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[14px] w-full"
              data-node-id="1:119"
            >
              Orchestrates real-time AutoML workflows with FastAPI, WebSockets,
              Redis, LangGraph, and Celery; automates Optuna/XGBoost tuning,
              SHAP explainability, and LLM recommendations.
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[1.6] not-italic relative shrink-0 text-[#777872] text-[10px] w-full"
          data-node-id="1:120"
        >
          SELECTED PROJECTS — ENGINEERED ACROSS AI/ML, DISTRIBUTED SYSTEMS,
          MOBILE, AND DEVOPS.
        </p>
      </div>
      <div
        className="bg-[#f4f4f0] content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[24px] py-[72px] relative shrink-0 w-full"
        id="mobile-hackathons"
        data-node-id="1:121"
        data-name="Hackathons"
      >
        <div
          className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:122"
          data-name="Hackathon introduction"
        >
          <div
            className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
            data-node-id="1:123"
            data-name="Section heading"
          >
            <div
              className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:124"
              data-name="Section introduction"
            >
              <div
                className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:125"
                data-name="Exhibition label"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
                  data-node-id="1:126"
                >
                  03
                </p>
                <div
                  className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
                  data-node-id="1:127"
                  data-name="Label rule"
                />
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
                  data-node-id="1:128"
                >{`PROFESSIONAL EXPERIENCE`}</p>
              </div>
              <div
                className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
                data-node-id="1:129"
              >
                <p className="leading-[1.07] mb-0">Real systems.</p>
                <p className="leading-[1.07]">Measurable impact.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col items-start not-italic overflow-clip relative shrink-0 w-full"
          data-node-id="1:133"
          data-name="Hackathon entries"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip py-[28px] relative shrink-0 w-full"
            data-node-id="1:134"
            data-name="Hackathon entry"
          >
            <div
              className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:135"
              data-name="Event"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:136"
              >
                HOULIHAN LOKEY / AUG 2026—PRESENT
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px]"
                data-node-id="1:137"
              >
                Data Scientist
              </p>
            </div>
            <div
              className="content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:138"
              data-name="Prototype"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px] whitespace-nowrap"
                data-node-id="1:139"
              >
                Corporate Valuation & Advisory Services
              </p>
              <p
                className="leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
                data-node-id="1:140"
              >
                Built a pipeline for public documents exceeding 150 pages and a
                multiprocessing architecture that distributes more than 4,500
                extraction workloads across CPU cores for valuation analysis.
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:141"
              data-name="Contribution"
            >
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[12px]"
                data-node-id="1:142"
              >
                Document intelligence + data engineering
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:143"
              >
                Python · Multiprocessing · Financial data
              </p>
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip py-[28px] relative shrink-0 w-full"
            data-node-id="1:144"
            data-name="Hackathon entry"
          >
            <div
              className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:145"
              data-name="Event"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:146"
              >
                UNIVERSITY OF SOUTHERN CALIFORNIA / JAN—APR 2025
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px]"
                data-node-id="1:147"
              >
                AI/ML Intern
              </p>
            </div>
            <div
              className="content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:148"
              data-name="Prototype"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px] whitespace-nowrap"
                data-node-id="1:149"
              >
                Research and model evaluation
              </p>
              <p
                className="leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
                data-node-id="1:150"
              >
                Built and evaluated machine learning models with
                cross-functional product teams, translating experiments into
                deployable research components.
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:151"
              data-name="Contribution"
            >
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[12px]"
                data-node-id="1:152"
              >
                Machine learning research
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:153"
              >
                Python · Model evaluation · Documentation
              </p>
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip py-[28px] relative shrink-0 w-full"
            data-node-id="1:154"
            data-name="Hackathon entry"
          >
            <div
              className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:155"
              data-name="Event"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:156"
              >
                USC / RESEARCH OUTCOMES
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px]"
                data-node-id="1:157"
              >
                Technical recommendations
              </p>
            </div>
            <div
              className="content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:158"
              data-name="Prototype"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px] whitespace-nowrap"
                data-node-id="1:159"
              >
                From experiments to decisions
              </p>
              <p
                className="leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
                data-node-id="1:160"
              >
                Documented technical findings into structured summaries and
                presented 6+ concrete recommendations to research stakeholders.
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:161"
              data-name="Contribution"
            >
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[12px]"
                data-node-id="1:162"
              >
                Research communication
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:163"
              >
                ML experiments · Stakeholder insights
              </p>
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[9px] w-full"
          data-node-id="1:164"
        >
          EXPERIENCE ACROSS FINANCIAL DATA PIPELINES, MACHINE LEARNING RESEARCH,
          AND PRODUCTION-ORIENTED ENGINEERING.
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[24px] py-[72px] relative shrink-0 w-full"
        id="mobile-skills"
        data-node-id="1:165"
        data-name="Skills and tools"
      >
        <div
          className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:166"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:167"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:168"
            >
              04
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:169"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:170"
            >
              TECHNICAL SKILLS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
            data-node-id="1:171"
          >
            Many tools. One engineering mindset.
          </p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:172"
          data-name="Skill disciplines"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[22px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:173"
            data-name="Skill discipline"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:174"
              data-name="Discipline heading"
            >
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[46px]"
                data-node-id="1:175"
              >
                Languages
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#294beb] text-[10px]"
                data-node-id="1:176"
              >
                /01
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[13px] w-full"
              data-node-id="1:177"
            >
              Strong foundations for systems, algorithms, and data.
            </p>
            <div
              className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:178"
              data-name="Tools"
            >
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:179"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:180"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:181"
                >
                  C++ / Java
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:182"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:183"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:184"
                >
                  Python / Go
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:185"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:186"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:187"
                >
                  JavaScript / SQL
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:188"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:189"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:190"
                >
                  Algorithms / problem solving
                </p>
              </div>
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[22px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:191"
            data-name="Skill discipline"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:192"
              data-name="Discipline heading"
            >
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[46px]"
                data-node-id="1:193"
              >
                Web & mobile
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#294beb] text-[10px]"
                data-node-id="1:194"
              >
                /02
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[13px] w-full"
              data-node-id="1:195"
            >
              Full-stack products, mobile applications, and APIs.
            </p>
            <div
              className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:196"
              data-name="Tools"
            >
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:197"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:198"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:199"
                >
                  ReactJS / React Native
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:200"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:201"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:202"
                >
                  Next.js / Node.js
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:203"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:204"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:205"
                >
                  RESTful APIs / gRPC
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:206"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:207"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:208"
                >
                  FastAPI / WebSockets
                </p>
              </div>
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[22px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:209"
            data-name="Skill discipline"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:210"
              data-name="Discipline heading"
            >
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[46px]"
                data-node-id="1:211"
              >
                ML & DevOps
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#294beb] text-[10px]"
                data-node-id="1:212"
              >
                /03
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[13px] w-full"
              data-node-id="1:213"
            >
              Models, infrastructure, data, and deployment workflows.
            </p>
            <div
              className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:214"
              data-name="Tools"
            >
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:215"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:216"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:217"
                >
                  TensorFlow / PyTorch / Scikit-Learn
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:218"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:219"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:220"
                >
                  LangChain / Pandas / NumPy
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:221"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:222"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:223"
                >
                  AWS / Docker / Kubernetes
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:224"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:225"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:226"
                >
                  Git/GitHub / CI/CD / MongoDB / PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[40px] items-start overflow-clip pb-[72px] px-[24px] relative shrink-0 w-full"
        id="mobile-process"
        data-node-id="1:227"
        data-name="Working process"
      >
        <div
          className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:228"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:229"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:230"
            >
              05
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:231"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:232"
            >
              EDUCATION & LEADERSHIP
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
            data-node-id="1:233"
          >
            Learning deeply. Leading by building.
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start not-italic overflow-clip relative shrink-0 w-full"
          data-node-id="1:234"
          data-name="Process steps"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[16px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:235"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:236"
            >
              01 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:237"
            >
              DJSCE, Mumbai.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:238"
            >
              SVKM’s Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai,
              India.
            </p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[16px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:239"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:240"
            >
              02 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:241"
            >
              B.Tech in IT.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:242"
            >
              Bachelor of Technology in Information Technology with Honors in
              DevOps; expected July 2027.
            </p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[16px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:243"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:244"
            >
              03 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:245"
            >
              CGPA 9.44 / 10.0.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:246"
            >
              A rigorous academic foundation spanning software engineering,
              data, cloud infrastructure, and machine learning.
            </p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[16px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:247"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:248"
            >
              04 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:249"
            >
              Technical Lead.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:250"
            >
              Guide a team of 6 developers at DJ InIT.Ai through AI/ML project
              lifecycles, code reviews, and technical workshops.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#f4f4f0] content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[24px] py-[64px] relative shrink-0 w-full"
        id="mobile-playground"
        data-node-id="1:251"
        data-name="Creative playground"
      >
        <div
          className="content-stretch flex flex-col gap-[24px] items-start justify-end overflow-clip relative shrink-0 w-full"
          data-node-id="1:252"
          data-name="Playground introduction"
        >
          <div
            className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
            data-node-id="1:253"
            data-name="Playground heading"
          >
            <div
              className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:254"
              data-name="Section introduction"
            >
              <div
                className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:255"
                data-name="Exhibition label"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
                  data-node-id="1:256"
                >
                  06
                </p>
                <div
                  className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
                  data-node-id="1:257"
                  data-name="Label rule"
                />
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
                  data-node-id="1:258"
                >
                  LEADERSHIP IN PRACTICE
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
                data-node-id="1:259"
              >
                Building better, together.
              </p>
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.8] not-italic relative shrink-0 text-[#777872] text-[14px] w-full"
            data-node-id="1:260"
          >
            At DJ InIT.Ai, I guide developers from early ideas through
            implementation, reviews, and practical AI/ML workshops.
          </p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:261"
          data-name="Visual experiments"
        >
          <div
            className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="1:262"
            data-name="Material study"
          >
            <div
              className="h-[280px] relative shrink-0 w-full"
              data-node-id="1:263"
              data-name="Editorial photograph"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgEditorialPhotograph2}
              />
            </div>
            <div
              className="[word-break:break-word] content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:264"
              data-name="Experiment caption"
            >
              <p
                className="relative shrink-0 text-[#242522]"
                data-node-id="1:265"
              >
                001 / DJ INIT.AI CLUB
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:266"
              >
                TECHNICAL LEAD
              </p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap"
            data-node-id="1:267"
            data-name="Type study"
          >
            <div
              className="bg-[#edf0ff] content-stretch flex flex-col gap-[10px] h-[280px] items-center justify-center overflow-clip relative shrink-0 text-[#294beb] w-full"
              data-node-id="1:268"
              data-name="Type specimen"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[9px] tracking-[3px]"
                data-node-id="1:269"
              >
                GUIDE / REVIEW / TEACH
              </p>
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic leading-[1.1] relative shrink-0 text-[120px] tracking-[-9px]"
                data-node-id="1:270"
              >
                lead.
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[8px] tracking-[2px]"
                data-node-id="1:271"
              >
                A TEAM OF SIX DEVELOPERS
              </p>
            </div>
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[9px] w-full"
              data-node-id="1:272"
              data-name="Experiment caption"
            >
              <p
                className="relative shrink-0 text-[#242522]"
                data-node-id="1:273"
              >
                002 / AI & ML WORKSHOPS
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:274"
              >
                AUG 2024—PRESENT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[24px] py-[72px] relative shrink-0 w-full"
        id="mobile-notes"
        data-node-id="1:275"
        data-name="Field notes"
      >
        <div
          className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:276"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:277"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:278"
            >
              07
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:279"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:280"
            >
              AWARDS & ACHIEVEMENTS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[42px] tracking-[-2px] w-full"
            data-node-id="1:281"
          >
            Milestones that matter.
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic overflow-clip relative shrink-0 w-full"
          data-node-id="1:282"
          data-name="Notebook entries"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:283"
            data-name="Notebook entry"
          >
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:284"
              data-name="Entry metadata"
            >
              <p
                className="relative shrink-0 text-[#294beb]"
                data-node-id="1:285"
              >
                CERTIFICATION
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:286"
              >
                APR 2026
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#242522] text-[24px] tracking-[-0.8px] w-[min-content]"
              data-node-id="1:287"
            >
              AWS Academy Graduate Certified Cloud (Foundational)
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:288"
            >
              Gained practical knowledge of core AWS services, cloud
              infrastructure, architecture, and security best practices.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#777872] text-[9px] whitespace-pre"
              data-node-id="1:289"
            >{`AMAZON WEB SERVICES  ↗`}</p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:290"
            data-name="Notebook entry"
          >
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:291"
              data-name="Entry metadata"
            >
              <p
                className="relative shrink-0 text-[#294beb]"
                data-node-id="1:292"
              >
                COMPETITION
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:293"
              >
                OCT 2025
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#242522] text-[24px] tracking-[-0.8px] w-[min-content]"
              data-node-id="1:294"
            >
              Google Open Challenge 2025
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:295"
            >
              Advanced to the national finals through algorithm design and
              software engineering proficiency.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#777872] text-[9px] whitespace-pre"
              data-node-id="1:296"
            >{`AMAZON WEB SERVICES  ↗`}</p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[18px] items-start overflow-clip pt-[20px] relative shrink-0 w-full"
            data-node-id="1:297"
            data-name="Notebook entry"
          >
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:298"
              data-name="Entry metadata"
            >
              <p
                className="relative shrink-0 text-[#294beb]"
                data-node-id="1:299"
              >
                HACKATHON
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:300"
              >
                JUN 2025
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#242522] text-[24px] tracking-[-0.8px] w-[min-content]"
              data-node-id="1:301"
            >
              JP Morgan Chase & Co. — Code For Good 2025
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:302"
            >
              Selected among the top 160 students from more than 65,000
              applicants for the national software engineering hackathon.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#777872] text-[9px] whitespace-pre"
              data-node-id="1:303"
            >{`AMAZON WEB SERVICES  ↗`}</p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#f4f4f0] content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[64px] px-[24px] relative shrink-0 w-full"
        id="mobile-contact"
        data-node-id="1:304"
        data-name="Contact and colophon"
      >
        <div
          className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
          data-node-id="1:305"
          data-name="Contact overline"
        >
          <p
            className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[10px] tracking-[1px] whitespace-nowrap"
            data-node-id="1:306"
          >
            08 — LET’S CONNECT
          </p>
          <div
            className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0"
            data-node-id="1:307"
            data-name="Availability"
          >
            <div
              className="relative shrink-0 size-[6px]"
              data-node-id="1:308"
              data-name="Availability marker"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgStatusMarker}
              />
            </div>
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[9px] whitespace-nowrap"
              data-node-id="1:309"
            >
              LET’S CONNECT
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:310"
          data-name="Contact composition"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[28px] items-start not-italic overflow-clip relative shrink-0 w-full"
            data-node-id="1:311"
            data-name="Contact invitation"
          >
            <div
              className="leading-[0] min-w-full relative shrink-0 text-[#242522] text-[51px] tracking-[-3px] w-[min-content]"
              data-node-id="1:312"
            >
              <p className="leading-[1.08] mb-0">Let’s build</p>
              <p className="font-['Bodoni_Moda:Italic'] italic leading-[1.08] text-[#294beb]">
                something meaningful.
              </p>
            </div>
            <p
              className="leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[15px] w-[min-content]"
              data-node-id="1:313"
            >
              For engineering opportunities, research collaborations, or a good
              technical conversation, reach me at +91-7977019432.
            </p>
            <p
              className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] relative shrink-0 text-[#242522] text-[20px] tracking-[-0.7px] underline whitespace-nowrap"
              data-node-id="1:314"
            >
              pranav.djsce24@gmail.com ↗
            </p>
            <div
              className="content-stretch flex gap-[26px] items-start leading-[normal] overflow-clip relative shrink-0 text-[#242522] text-[12px] whitespace-nowrap"
              data-node-id="1:315"
              data-name="Social links"
            >
              <p className="relative shrink-0" data-node-id="1:316">
                GitHub ↗
              </p>
              <p className="relative shrink-0" data-node-id="1:317">
                LinkedIn ↗
              </p>
              <p className="relative shrink-0" data-node-id="1:318">
                Portfolio ↗
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="1:319"
            data-name="Message form"
          >
            <div
              className="[word-break:break-word] border-[#dedfd9] border-b border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic overflow-clip pb-[16px] relative shrink-0 text-[#777872] w-full"
              data-node-id="1:320"
              data-name="Contact field"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[9px] whitespace-nowrap"
                data-node-id="1:321"
              >
                YOUR NAME
              </p>
              <p
                className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]"
                data-node-id="1:322"
              >
                Your name
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#dedfd9] border-b border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic overflow-clip pb-[16px] relative shrink-0 text-[#777872] w-full"
              data-node-id="1:323"
              data-name="Contact field"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[9px] whitespace-nowrap"
                data-node-id="1:324"
              >
                EMAIL ADDRESS
              </p>
              <p
                className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]"
                data-node-id="1:325"
              >
                you@example.com
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#dedfd9] border-b border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic overflow-clip pb-[40px] relative shrink-0 text-[#777872] w-full"
              data-node-id="1:326"
              data-name="Contact field"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[9px] whitespace-nowrap"
                data-node-id="1:327"
              >
                WHAT’S ON YOUR MIND?
              </p>
              <p
                className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]"
                data-node-id="1:328"
              >
                Tell me about the opportunity…
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
              data-node-id="1:329"
              data-name="Send message"
            >
              <div
                className="bg-[#294beb] content-stretch flex gap-[24px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[100px] shrink-0"
                data-node-id="1:330"
                data-name="Action"
              >
                <p
                  className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                  data-node-id="1:331"
                >
                  Send a little hello
                </p>
                <div
                  className="relative shrink-0 size-[17px]"
                  data-node-id="1:332"
                  data-name="arrow-up-right"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowUpRight}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[8px] whitespace-nowrap"
                data-node-id="1:334"
              >
                CONTACT FORM
              </p>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[32px] pt-[24px] relative shrink-0 w-full"
          data-node-id="1:335"
          data-name="Portfolio footer"
        >
          <div
            className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
            data-node-id="1:336"
            data-name="Colophon"
          >
            <p
              className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[28px]"
              data-node-id="1:337"
            >
              Pranav Dharwadkar
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#777872] text-[9px]"
              data-node-id="1:338"
            >
              ENGINEERED WITH CURIOSITY. ALWAYS LEARNING.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#242522] text-[9px]"
              data-node-id="1:339"
            >
              BACK TO TOP ↑
            </p>
          </div>
          <p
            className="font-['IBM_Plex_Mono:Regular'] leading-[1.8] not-italic relative shrink-0 text-[#777872] text-[8px] w-full"
            data-node-id="1:340"
          >{`© 2026 / PRANAV DHARWADKAR — AI/ML, SOFTWARE ENGINEERING, AND DEVOPS PORTFOLIO.`}</p>
        </div>
      </div>
    </div>
  )
}
