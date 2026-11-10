import imgRibbonSculpture from "./assets/alex-desktop/a1df2.png"
import imgEditorialPhotograph from "./assets/image.png"
import imgEditorialPhotograph1 from "./assets/codebase-visualization-cover.svg"
import imgAuraGroundPreview from "./assets/alex-desktop/a4f17.png"
import imgEditorialPhotograph2 from "./assets/alex-desktop/f7cda.png"
import imgArrowUpRight from "./assets/alex-desktop/88ae1.svg"
import imgArrowUpRight1 from "./assets/alex-desktop/774e5.svg"
import imgStatusMarker from "./assets/alex-desktop/0c75b.svg"
import imgArrowUpRight2 from "./assets/alex-desktop/6933d.svg"
import imgArrowUpRight3 from "./assets/alex-desktop/bee23.svg"

export default function AlexMorganDesktopPortfolio() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-node-id="1:341"
      data-name="Pranav Dharwadkar — Desktop portfolio"
    >
      <div
        className="content-stretch flex flex-col items-start overflow-clip px-[72px] relative shrink-0 w-full min-h-screen"
        data-node-id="1:342"
        data-name="Introduction"
      >
        <div
          className="border-[#dedfd9] border-b border-solid content-stretch flex h-[112px] items-center justify-between overflow-clip relative shrink-0 w-full"
          data-node-id="1:343"
          data-name="Navigation"
        >
          <div
            className="[word-break:break-word] content-stretch flex gap-[10px] items-center leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap"
            data-node-id="1:344"
            data-name="Identity"
          >
            <p
              className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#294beb] text-[34px]"
              data-node-id="1:345"
            >
              a.
            </p>
            <p
              className="font-['Inter:Medium'] font-medium not-italic relative shrink-0 text-[#242522] text-[14px]"
              data-node-id="1:346"
            >
              Pranav Dharwadkar
            </p>
          </div>
          <div
            className="content-stretch flex gap-[36px] items-center overflow-clip relative shrink-0"
            data-node-id="1:347"
            data-name="Page links"
          >
            <a
              href="#about"
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[13px] whitespace-nowrap"
              data-node-id="1:348"
            >
              About
            </a>
            <a
              href="#work"
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[13px] whitespace-nowrap"
              data-node-id="1:349"
            >
              Work
            </a>
            <a
              href="#hackathons"
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[13px] whitespace-nowrap"
              data-node-id="1:350"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[13px] whitespace-nowrap"
              data-node-id="1:351"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="content-stretch flex gap-[24px] h-[48px] items-center overflow-clip relative shrink-0"
              data-node-id="1:352"
              data-name="Action"
            >
              <p
                className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#242522] text-[13px] whitespace-nowrap"
                data-node-id="1:353"
              >
                Let’s talk
              </p>
              <div
                className="relative shrink-0 size-[17px]"
                data-node-id="1:354"
                data-name="arrow-up-right"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowUpRight}
                />
              </div>
            </a>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] not-italic overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#777872] text-[11px] w-full whitespace-nowrap"
          data-node-id="1:356"
          data-name="Portfolio masthead"
        >
          <p
            className="relative shrink-0 tracking-[0.7px]"
            data-node-id="1:357"
          >
            AI/ML × SOFTWARE ENGINEERING
          </p>
          <p className="relative shrink-0" data-node-id="1:358">
            PORTFOLIO / 2026
          </p>
        </div>
        <div
          className="content-stretch flex flex-col flex-1 min-h-[560px] items-start relative shrink-0 w-full"
          data-node-id="1:359"
          data-name="Hero composition"
        >
          <p
            className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0.98] left-0 not-italic right-0 text-[#242522] text-[clamp(72px,9vw,154px)] top-0 tracking-[-6px]"
            data-node-id="1:360"
          >
            A little curious.
          </p>
          <p
            className="[word-break:break-word] absolute font-['Bodoni_Moda:Italic'] font-normal italic leading-[1.02] left-[48px] text-[#242522] text-[clamp(72px,9vw,155px)] top-[150px] tracking-[-5px] w-[80%]"
            data-node-id="1:361"
          >
            A lot of possibility.
          </p>
          <div
            className="absolute h-[320px] right-0 top-[220px] w-[560px] max-w-[48%] pointer-events-none z-10"
            data-node-id="1:362"
            data-name="Ribbon sculpture"
          >
            <img
              alt="Metallic ribbon sculpture"
              className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
              src={imgRibbonSculpture}
              onError={(e) => {
                const el = e.currentTarget
                const step = Number(el.dataset.fallbackStep || "0")
                const fallbacks = ["./assets/alex-desktop/a1df2.png", "/assets/alex-desktop/a1df2.png", "assets/alex-desktop/a1df2.png"]
                if (step < fallbacks.length) {
                  el.dataset.fallbackStep = String(step + 1)
                  el.src = fallbacks[step]
                }
              }}
            />
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[340px] w-[365px]"
            data-node-id="1:363"
            data-name="Personal introduction"
          >
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#777872] text-[17px] w-[min-content]"
              data-node-id="1:364"
            >
              I’m Pranav. I build intelligent systems, resilient applications,
              and developer tools — from research prototypes to production-ready
              platforms.
            </p>
            <div
              className="bg-[#294beb] content-stretch flex gap-[24px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[100px] shrink-0"
              data-node-id="1:365"
              data-name="Action"
            >
              <p
                className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                data-node-id="1:366"
              >
                Explore my work
              </p>
              <div
                className="relative shrink-0 size-[17px]"
                data-node-id="1:367"
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
            className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular'] leading-[normal] left-[75%] not-italic text-[#777872] text-[9px] bottom-[8px] whitespace-nowrap"
            data-node-id="1:369"
          >
            FIG. 01 — AN EXERCISE IN POSSIBILITY
          </p>
        </div>
        <div
          className="border-[#dedfd9] border-solid border-t content-stretch flex h-[76px] items-center justify-between overflow-clip relative shrink-0 w-full"
          data-node-id="1:370"
          data-name="Hero footer"
        >
          <div
            className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0"
            data-node-id="1:371"
            data-name="Availability"
          >
            <div
              className="relative shrink-0 size-[6px]"
              data-node-id="1:372"
              data-name="Status marker"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgStatusMarker}
              />
            </div>
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] whitespace-nowrap"
              data-node-id="1:373"
            >
              OPEN TO GOOD CONVERSATIONS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#242522] text-[11px] whitespace-pre"
            data-node-id="1:374"
          >{`SCROLL TO DISCOVER  ↓`}</p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[58px] items-start overflow-clip px-[72px] py-[112px] relative shrink-0 w-full"
        id="about"
        data-node-id="1:375"
        data-name="About me"
      >
        <div
          className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:376"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:377"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:378"
            >
              01
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:379"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:380"
            >
              ENGINEER, RESEARCHER, AND BUILDER
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
            data-node-id="1:381"
          >
            Hello, I’m Pranav.
          </p>
        </div>
        <div
          className="content-stretch flex gap-[100px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:382"
          data-name="About composition"
        >
          <div
            className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[370px]"
            data-node-id="1:383"
            data-name="Portrait and caption"
          >
            <div
              className="h-[370px] relative shrink-0 w-full"
              data-node-id="1:384"
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
              data-node-id="1:385"
              data-name="Portrait caption"
            >
              <p className="relative shrink-0" data-node-id="1:386">
                FIG. 02 / THE HUMAN SIDE
              </p>
              <p className="relative shrink-0" data-node-id="1:387">
                PORTFOLIO PORTRAIT
              </p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px not-italic overflow-clip relative"
            data-node-id="1:388"
            data-name="Biography"
          >
            <p
              className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[#242522] text-[40px] tracking-[-1.3px] w-full"
              data-node-id="1:389"
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
              data-node-id="1:390"
            >
              I’m a creative developer exploring the space between useful
              software and expressive design. I enjoy building for the web,
              getting a little lost in an idea, and finding the simplest way
              through it.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] relative shrink-0 text-[#777872] text-[15px] w-full"
              data-node-id="1:391"
            >
              Away from the screen: sketchbooks, long walks, second-hand
              bookshops, and noticing the details most people walk past.
            </p>
            <div
              className="border-[#dedfd9] border-solid border-t content-stretch flex gap-[80px] items-start leading-[normal] overflow-clip pt-[16px] relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:392"
              data-name="Personal details"
            >
              <div
                className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0"
                data-node-id="1:393"
                data-name="Personal detail"
              >
                <p
                  className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                  data-node-id="1:394"
                >
                  BASED IN
                </p>
                <p
                  className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[13px]"
                  data-node-id="1:395"
                >
                  Your city, Earth
                </p>
              </div>
              <div
                className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0"
                data-node-id="1:396"
                data-name="Personal detail"
              >
                <p
                  className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                  data-node-id="1:397"
                >
                  CURRENTLY
                </p>
                <p
                  className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[13px]"
                  data-node-id="1:398"
                >
                  Learning by making
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[48px] items-start pb-[64px] pt-[32px] px-[72px] relative shrink-0 w-full"
        id="work"
        data-node-id="1:399"
        data-name="Featured project"
      >
        <div
          className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:400"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:401"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:402"
            >
              02
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:403"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:404"
            >
              SELECTED ENGINEERING PROJECTS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
            data-node-id="1:405"
          >
            Systems built to think.
          </p>
        </div>
        <div
          className="bg-[#f4f4f0] content-stretch flex flex-col h-[580px] items-start justify-center p-[64px] relative shrink-0 w-full"
          data-node-id="1:406"
          data-name="Archive project preview"
        >
          <div
            className="bg-white border border-[#dedfd9] border-solid content-stretch flex flex-col gap-[28px] items-start p-[32px] relative shrink-0 w-full"
            data-node-id="1:407"
            data-name="Forma application"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full"
              data-node-id="1:408"
              data-name="Application navigation"
            >
              <p
                className="font-['Bodoni_Moda:Regular'] font-normal relative shrink-0 text-[#242522] text-[32px] whitespace-nowrap"
                data-node-id="1:409"
              >
                ka-chow.
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#777872] text-[10px] whitespace-pre"
                data-node-id="1:410"
              >{`KNOWLEDGE GRAPH      ANALYZE      PATCH     ↗`}</p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal gap-[24px] items-end leading-[0] not-italic overflow-clip relative shrink-0 w-full"
              data-node-id="1:411"
              data-name="Archive heading"
            >
              <div
                className="flex-[1_0_0] min-w-px relative text-[#242522] text-[60px] tracking-[-3px]"
                data-node-id="1:412"
              >
                <p className="leading-[1.04] mb-0">A live map of your</p>
                <p className="leading-[1.04]">entire codebase.</p>
              </div>
              <div
                className="relative shrink-0 text-[#777872] text-[11px] w-[200px]"
                data-node-id="1:413"
              >
                <p className="leading-[1.6] mb-0">
                  Map architecture as it changes.
                </p>
                <p className="leading-[1.6]">Predict impact before merging.</p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:414"
              data-name="Archive collection"
            >
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative"
                data-node-id="1:415"
                data-name="Collection object"
              >
                <div
                  className="h-[205px] relative shrink-0 w-full"
                  data-node-id="1:416"
                  data-name="Editorial photograph"
                >
                  <img
                    alt="KA-CHOW codebase knowledge graph visualization"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgEditorialPhotograph1}
                  />
                </div>
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[9px] whitespace-nowrap"
                  data-node-id="1:417"
                >{`01 / CODE KNOWLEDGE GRAPH`}</p>
              </div>
              <div
                className="[word-break:break-word] bg-[#edf0ff] content-stretch flex flex-col gap-[8px] h-[205px] items-center justify-center leading-[normal] overflow-clip relative shrink-0 text-[#294beb] w-[270px] whitespace-nowrap"
                data-node-id="1:418"
                data-name="Typography collection"
              >
                <p
                  className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[96px]"
                  data-node-id="1:419"
                >
                  Aa
                </p>
                <p
                  className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[8px]"
                  data-node-id="1:420"
                >
                  ARCHITECTURE AT A GLANCE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full"
          data-node-id="1:421"
          data-name="Featured project details"
        >
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
            data-node-id="1:422"
            data-name="Project information"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px not-italic relative"
              data-node-id="1:423"
              data-name="Project description"
            >
              <p
                className="font-['Inter:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#242522] text-[32px] tracking-[-1px] w-full"
                data-node-id="1:424"
              >
                KA-CHOW — The autonomous engineering brain
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] leading-[1.6] relative shrink-0 text-[#777872] text-[10px] w-full whitespace-pre-wrap"
                data-node-id="1:425"
              >
                01 / GO • PYTHON • DOCKER • KUBERNETES • CI/CD • GITHUB ↗
              </p>
            </div>
            <div
              className="border border-[#dedfd9] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[44px]"
              data-node-id="1:426"
              data-name="Project link"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-node-id="1:427"
                data-name="arrow-up-right"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowUpRight2}
                />
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[15px] w-[640px]"
            data-node-id="1:429"
          >
            Architected live codebase knowledge graphs that save up to 10 hours
            of setup, an API-aware “What-If” analyzer for CI/CD, and a
            self-healing patcher that opens GitHub pull requests.
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[112px] px-[72px] relative shrink-0 w-full"
        data-node-id="1:430"
        data-name="More selected projects"
      >
        <div
          className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:431"
          data-name="Project collection"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative"
            data-node-id="1:432"
            data-name="Aura ground project"
          >
            <div
              className="bg-[#f4f4f0] content-stretch flex flex-col h-[430px] items-start p-[28px] relative shrink-0 w-full"
              data-node-id="1:433"
              data-name="Aura ground preview"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgAuraGroundPreview}
              />
              <div
                className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[14px] items-start p-[22px] relative shrink-0 w-[320px]"
                data-node-id="1:435"
                data-name="Place discovery card"
              >
                <p
                  className="font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[8px] whitespace-nowrap"
                  data-node-id="1:436"
                >
                  DISASTER RELIEF, OFFLINE.
                </p>
                <div
                  className="font-['Bodoni_Moda:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[#242522] text-[46px] w-[min-content]"
                  data-node-id="1:437"
                >
                  <p className="leading-[1.02] mb-0">Aura</p>
                  <p className="leading-[1.02]">Net.</p>
                </div>
                <div
                  className="border border-[#dedfd9] border-solid content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic overflow-clip p-[12px] relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="1:438"
                  data-name="Discovery search"
                >
                  <p
                    className="relative shrink-0 text-[#777872] text-[9px]"
                    data-node-id="1:439"
                  >
                    Coordinate the next response
                  </p>
                  <p
                    className="relative shrink-0 text-[#294beb] text-[12px]"
                    data-node-id="1:440"
                  >
                    ↗
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-node-id="1:441"
              data-name="Project information"
            >
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px not-italic relative"
                data-node-id="1:442"
                data-name="Project description"
              >
                <p
                  className="font-['Inter:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#242522] text-[32px] tracking-[-1px] w-full"
                  data-node-id="1:443"
                >
                  AuraNet — Disaster resilience network
                </p>
                <p
                  className="font-['IBM_Plex_Mono:Regular'] leading-[1.6] relative shrink-0 text-[#777872] text-[10px] w-full"
                  data-node-id="1:444"
                >
                  02 / PYTHON • REACT NATIVE • BLE • GITHUB ↗
                </p>
              </div>
              <div
                className="border border-[#dedfd9] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[44px]"
                data-node-id="1:445"
                data-name="Project link"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="1:446"
                  data-name="arrow-up-right"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowUpRight2}
                  />
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[14px] w-full"
              data-node-id="1:448"
            >
              Processes live weather data to route up to 50 volunteers, while a
              custom offline BLE mesh connects up to 15 mobile clients and
              improves simulated crisis response times by 40%.
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative"
            data-node-id="1:449"
            data-name="NeuralFlow — Autonomous AutoML orchestrator project"
          >
            <div
              className="bg-[#edf0ff] content-stretch flex flex-col h-[430px] items-center justify-center overflow-clip p-[52px] relative shrink-0 w-full"
              data-node-id="1:450"
              data-name="NeuralFlow — Autonomous AutoML orchestrator preview"
            >
              <div
                className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[28px] relative shrink-0 w-[285px]"
                data-node-id="1:451"
                data-name="Focus application"
              >
                <div
                  className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="1:452"
                  data-name="App header"
                >
                  <p
                    className="relative shrink-0 text-[#242522] text-[11px]"
                    data-node-id="1:453"
                  >
                    NeuralFlow
                  </p>
                  <p
                    className="relative shrink-0 text-[#294beb] text-[12px]"
                    data-node-id="1:454"
                  >
                    ✳
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[8px] whitespace-nowrap"
                  data-node-id="1:455"
                >
                  ONE PIPELINE AT A TIME.
                </p>
                <p
                  className="[word-break:break-word] font-['Bodoni_Moda:Regular'] font-normal leading-none relative shrink-0 text-[#294beb] text-[74px] whitespace-nowrap"
                  data-node-id="1:456"
                >
                  24:59
                </p>
                <div
                  className="bg-[#edf0ff] h-[2px] relative shrink-0 w-full"
                  data-node-id="1:457"
                  data-name="Session progress"
                />
                <div
                  className="bg-[#294beb] content-stretch flex items-start justify-center overflow-clip p-[12px] relative shrink-0 w-full"
                  data-node-id="1:458"
                  data-name="Timer action"
                >
                  <p
                    className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap"
                    data-node-id="1:459"
                  >
                    Run autonomous workflow
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-node-id="1:460"
              data-name="Project information"
            >
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px not-italic relative"
                data-node-id="1:461"
                data-name="Project description"
              >
                <p
                  className="font-['Inter:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#242522] text-[32px] tracking-[-1px] w-full"
                  data-node-id="1:462"
                >
                  NeuralFlow — Autonomous AutoML orchestrator
                </p>
                <p
                  className="font-['IBM_Plex_Mono:Regular'] leading-[1.6] relative shrink-0 text-[#777872] text-[10px] w-full"
                  data-node-id="1:463"
                >
                  03 / FASTAPI • LANGGRAPH • CELERY • GITHUB ↗
                </p>
              </div>
              <div
                className="border border-[#dedfd9] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[44px]"
                data-node-id="1:464"
                data-name="Project link"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="1:465"
                  data-name="arrow-up-right"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowUpRight2}
                  />
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[14px] w-full"
              data-node-id="1:467"
            >
              Orchestrates real-time AutoML workflows with FastAPI, WebSockets,
              Redis, LangGraph, and Celery; automates Optuna/XGBoost tuning,
              SHAP explainability, and LLM recommendations.
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[1.6] not-italic relative shrink-0 text-[#777872] text-[10px] w-full"
          data-node-id="1:468"
        >
          SELECTED PROJECTS — ENGINEERED ACROSS AI/ML, DISTRIBUTED SYSTEMS,
          MOBILE, AND DEVOPS.
        </p>
      </div>
      <div
        className="bg-[#f4f4f0] content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[72px] py-[100px] relative shrink-0 w-full"
        id="hackathons"
        data-node-id="1:469"
        data-name="Hackathons"
      >
        <div
          className="content-stretch flex gap-[100px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:470"
          data-name="Hackathon introduction"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="1:471"
            data-name="Section heading"
          >
            <div
              className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:472"
              data-name="Section introduction"
            >
              <div
                className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:473"
                data-name="Exhibition label"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
                  data-node-id="1:474"
                >
                  03
                </p>
                <div
                  className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
                  data-node-id="1:475"
                  data-name="Label rule"
                />
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
                  data-node-id="1:476"
                >{`PROFESSIONAL EXPERIENCE`}</p>
              </div>
              <div
                className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
                data-node-id="1:477"
              >
                <p className="leading-[1.07] mb-0">Real systems.</p>
                <p className="leading-[1.07]">Measurable impact.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:481"
          data-name="Hackathon entries"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex gap-[40px] items-start overflow-clip py-[28px] relative shrink-0 w-full"
            data-node-id="1:482"
            data-name="Hackathon entry"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[270px] whitespace-nowrap"
              data-node-id="1:483"
              data-name="Event"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:484"
              >
                HOULIHAN LOKEY / AUG 2026—PRESENT
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px]"
                data-node-id="1:485"
              >
                Data Scientist
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start min-w-px not-italic overflow-clip relative"
              data-node-id="1:486"
              data-name="Prototype"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px] whitespace-nowrap"
                data-node-id="1:487"
              >
                Corporate Valuation & Advisory Services
              </p>
              <p
                className="leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
                data-node-id="1:488"
              >
                Built a pipeline for public documents exceeding 150 pages and a
                multiprocessing architecture that distributes more than 4,500
                extraction workloads across CPU cores for valuation analysis.
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[255px] whitespace-nowrap"
              data-node-id="1:489"
              data-name="Contribution"
            >
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[12px]"
                data-node-id="1:490"
              >
                Document intelligence + data engineering
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:491"
              >
                Python · Multiprocessing · Financial data
              </p>
            </div>
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:492"
              data-name="arrow-up-right"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgArrowUpRight3}
              />
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex gap-[40px] items-start overflow-clip py-[28px] relative shrink-0 w-full"
            data-node-id="1:494"
            data-name="Hackathon entry"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[270px] whitespace-nowrap"
              data-node-id="1:495"
              data-name="Event"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:496"
              >
                UNIVERSITY OF SOUTHERN CALIFORNIA / JAN—APR 2025
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px]"
                data-node-id="1:497"
              >
                AI/ML Intern
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start min-w-px not-italic overflow-clip relative"
              data-node-id="1:498"
              data-name="Prototype"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px] whitespace-nowrap"
                data-node-id="1:499"
              >
                Research and model evaluation
              </p>
              <p
                className="leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
                data-node-id="1:500"
              >
                Built and evaluated machine learning models with
                cross-functional product teams, translating experiments into
                deployable research components.
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[255px] whitespace-nowrap"
              data-node-id="1:501"
              data-name="Contribution"
            >
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[12px]"
                data-node-id="1:502"
              >
                Machine learning research
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:503"
              >
                Python · Model evaluation · Documentation
              </p>
            </div>
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:504"
              data-name="arrow-up-right"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgArrowUpRight3}
              />
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex gap-[40px] items-start overflow-clip py-[28px] relative shrink-0 w-full"
            data-node-id="1:506"
            data-name="Hackathon entry"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[270px] whitespace-nowrap"
              data-node-id="1:507"
              data-name="Event"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:508"
              >
                USC / RESEARCH OUTCOMES
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px]"
                data-node-id="1:509"
              >
                Technical recommendations
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start min-w-px not-italic overflow-clip relative"
              data-node-id="1:510"
              data-name="Prototype"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#242522] text-[22px] tracking-[-0.6px] whitespace-nowrap"
                data-node-id="1:511"
              >
                From experiments to decisions
              </p>
              <p
                className="leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
                data-node-id="1:512"
              >
                Documented technical findings into structured summaries and
                presented 6+ concrete recommendations to research stakeholders.
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[255px] whitespace-nowrap"
              data-node-id="1:513"
              data-name="Contribution"
            >
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#242522] text-[12px]"
                data-node-id="1:514"
              >
                Research communication
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#777872] text-[9px]"
                data-node-id="1:515"
              >
                ML experiments · Stakeholder insights
              </p>
            </div>
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:516"
              data-name="arrow-up-right"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgArrowUpRight3}
              />
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[9px] w-full"
          data-node-id="1:518"
        >
          EXPERIENCE ACROSS FINANCIAL DATA PIPELINES, MACHINE LEARNING RESEARCH,
          AND PRODUCTION-ORIENTED ENGINEERING.
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[64px] items-start overflow-clip px-[72px] py-[112px] relative shrink-0 w-full"
        id="skills"
        data-node-id="1:519"
        data-name="Skills and tools"
      >
        <div
          className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:520"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:521"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:522"
            >
              04
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:523"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:524"
            >
              TECHNICAL SKILLS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
            data-node-id="1:525"
          >
            Many tools. One engineering mindset.
          </p>
        </div>
        <div
          className="content-stretch flex gap-[56px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:526"
          data-name="Skill disciplines"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:527"
            data-name="Skill discipline"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:528"
              data-name="Discipline heading"
            >
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[46px]"
                data-node-id="1:529"
              >
                Languages
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#294beb] text-[10px]"
                data-node-id="1:530"
              >
                /01
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[13px] w-full"
              data-node-id="1:531"
            >
              Strong foundations for systems, algorithms, and data.
            </p>
            <div
              className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:532"
              data-name="Tools"
            >
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:533"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:534"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:535"
                >
                  C++ / Java
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:536"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:537"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:538"
                >
                  Python / Go
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:539"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:540"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:541"
                >
                  JavaScript / SQL
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:542"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:543"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:544"
                >
                  Algorithms / problem solving
                </p>
              </div>
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:545"
            data-name="Skill discipline"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:546"
              data-name="Discipline heading"
            >
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[46px]"
                data-node-id="1:547"
              >
                Web & mobile
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#294beb] text-[10px]"
                data-node-id="1:548"
              >
                /02
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[13px] w-full"
              data-node-id="1:549"
            >
              Full-stack products, mobile applications, and APIs.
            </p>
            <div
              className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:550"
              data-name="Tools"
            >
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:551"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:552"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:553"
                >
                  ReactJS / React Native
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:554"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:555"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:556"
                >
                  Next.js / Node.js
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:557"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:558"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:559"
                >
                  RESTful APIs / gRPC
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:560"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:561"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:562"
                >
                  FastAPI / WebSockets
                </p>
              </div>
            </div>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:563"
            data-name="Skill discipline"
          >
            <div
              className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-node-id="1:564"
              data-name="Discipline heading"
            >
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[46px]"
                data-node-id="1:565"
              >
                ML & DevOps
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#294beb] text-[10px]"
                data-node-id="1:566"
              >
                /03
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#777872] text-[13px] w-full"
              data-node-id="1:567"
            >
              Models, infrastructure, data, and deployment workflows.
            </p>
            <div
              className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:568"
              data-name="Tools"
            >
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:569"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:570"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:571"
                >
                  TensorFlow / PyTorch / Scikit-Learn
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:572"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:573"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:574"
                >
                  LangChain / Pandas / NumPy
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:575"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:576"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:577"
                >
                  AWS / Docker / Kubernetes
                </p>
              </div>
              <div
                className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:578"
                data-name="Tool"
              >
                <div
                  className="bg-[#294beb] relative shrink-0 size-[3px]"
                  data-node-id="1:579"
                  data-name="Tool marker"
                />
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#242522] text-[14px] whitespace-nowrap"
                  data-node-id="1:580"
                >
                  Git/GitHub / CI/CD / MongoDB / PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[56px] items-start overflow-clip pb-[112px] px-[72px] relative shrink-0 w-full"
        id="process"
        data-node-id="1:581"
        data-name="Working process"
      >
        <div
          className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:582"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:583"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:584"
            >
              05
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:585"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:586"
            >
              EDUCATION & LEADERSHIP
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
            data-node-id="1:587"
          >
            Learning deeply. Leading by building.
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex gap-[32px] items-start not-italic overflow-clip relative shrink-0 w-full"
          data-node-id="1:588"
          data-name="Process steps"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:589"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:590"
            >
              01 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:591"
            >
              DJSCE, Mumbai.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:592"
            >
              SVKM’s Dwarkadas Jivanlal Sanghvi College of Engineering, Mumbai,
              India.
            </p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:593"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:594"
            >
              02 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:595"
            >
              B.Tech in IT.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:596"
            >
              Bachelor of Technology in Information Technology with Honors in
              DevOps; expected July 2027.
            </p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:597"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:598"
            >
              03 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:599"
            >
              CGPA 9.44 / 10.0.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:600"
            >
              A rigorous academic foundation spanning software engineering,
              data, cloud infrastructure, and machine learning.
            </p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:601"
            data-name="Process step"
          >
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:602"
            >
              04 —
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#242522] text-[21px] tracking-[-0.6px] whitespace-nowrap"
              data-node-id="1:603"
            >
              Technical Lead.
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.8] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:604"
            >
              Guide a team of 6 developers at DJ InIT.Ai through AI/ML project
              lifecycles, code reviews, and technical workshops.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#f4f4f0] content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[72px] py-[96px] relative shrink-0 w-full"
        id="playground"
        data-node-id="1:605"
        data-name="Creative playground"
      >
        <div
          className="content-stretch flex gap-[100px] items-end overflow-clip relative shrink-0 w-full"
          data-node-id="1:606"
          data-name="Playground introduction"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
            data-node-id="1:607"
            data-name="Playground heading"
          >
            <div
              className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
              data-node-id="1:608"
              data-name="Section introduction"
            >
              <div
                className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
                data-node-id="1:609"
                data-name="Exhibition label"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
                  data-node-id="1:610"
                >
                  06
                </p>
                <div
                  className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
                  data-node-id="1:611"
                  data-name="Label rule"
                />
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
                  data-node-id="1:612"
                >
                  LEADERSHIP IN PRACTICE
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
                data-node-id="1:613"
              >
                Building better, together.
              </p>
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.8] not-italic relative shrink-0 text-[#777872] text-[14px] w-[330px]"
            data-node-id="1:614"
          >
            At DJ InIT.Ai, I guide developers from early ideas through
            implementation, reviews, and practical AI/ML workshops.
          </p>
        </div>
        <div
          className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:615"
          data-name="Visual experiments"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative"
            data-node-id="1:616"
            data-name="Material study"
          >
            <div
              className="h-[390px] relative shrink-0 w-full"
              data-node-id="1:617"
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
              data-node-id="1:618"
              data-name="Experiment caption"
            >
              <p
                className="relative shrink-0 text-[#242522]"
                data-node-id="1:619"
              >
                001 / DJ INIT.AI CLUB
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:620"
              >
                TECHNICAL LEAD
              </p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative whitespace-nowrap"
            data-node-id="1:621"
            data-name="Type study"
          >
            <div
              className="bg-[#edf0ff] content-stretch flex flex-col gap-[10px] h-[390px] items-center justify-center overflow-clip relative shrink-0 text-[#294beb] w-full"
              data-node-id="1:622"
              data-name="Type specimen"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[9px] tracking-[3px]"
                data-node-id="1:623"
              >
                GUIDE / REVIEW / TEACH
              </p>
              <p
                className="font-['Bodoni_Moda:Italic'] font-normal italic leading-[1.1] relative shrink-0 text-[185px] tracking-[-9px]"
                data-node-id="1:624"
              >
                lead.
              </p>
              <p
                className="font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[8px] tracking-[2px]"
                data-node-id="1:625"
              >
                A TEAM OF SIX DEVELOPERS
              </p>
            </div>
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[9px] w-full"
              data-node-id="1:626"
              data-name="Experiment caption"
            >
              <p
                className="relative shrink-0 text-[#242522]"
                data-node-id="1:627"
              >
                002 / AI & ML WORKSHOPS
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:628"
              >
                AUG 2024—PRESENT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[72px] py-[112px] relative shrink-0 w-full"
        id="notes"
        data-node-id="1:629"
        data-name="Field notes"
      >
        <div
          className="content-stretch flex flex-col gap-[38px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:630"
          data-name="Section introduction"
        >
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
            data-node-id="1:631"
            data-name="Exhibition label"
          >
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#294beb] text-[11px] whitespace-nowrap"
              data-node-id="1:632"
            >
              07
            </p>
            <div
              className="bg-[#dedfd9] h-px relative shrink-0 w-[32px]"
              data-node-id="1:633"
              data-name="Label rule"
            />
            <p
              className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[11px] tracking-[1px] whitespace-nowrap"
              data-node-id="1:634"
            >
              AWARDS & ACHIEVEMENTS
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.07] not-italic relative shrink-0 text-[#242522] text-[72px] tracking-[-4px] w-full"
            data-node-id="1:635"
          >
            Milestones that matter.
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex gap-[40px] items-start not-italic overflow-clip relative shrink-0 w-full"
          data-node-id="1:636"
          data-name="Notebook entries"
        >
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:637"
            data-name="Notebook entry"
          >
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:638"
              data-name="Entry metadata"
            >
              <p
                className="relative shrink-0 text-[#294beb]"
                data-node-id="1:639"
              >
                CERTIFICATION
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:640"
              >
                APR 2026
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#242522] text-[27px] tracking-[-0.8px] w-[min-content]"
              data-node-id="1:641"
            >
              AWS Academy Graduate Certified Cloud (Foundational)
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:642"
            >
              Gained practical knowledge of core AWS services, cloud
              infrastructure, architecture, and security best practices.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#777872] text-[9px] whitespace-pre"
              data-node-id="1:643"
            >{`AMAZON WEB SERVICES  ↗`}</p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:644"
            data-name="Notebook entry"
          >
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:645"
              data-name="Entry metadata"
            >
              <p
                className="relative shrink-0 text-[#294beb]"
                data-node-id="1:646"
              >
                COMPETITION
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:647"
              >
                OCT 2025
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#242522] text-[27px] tracking-[-0.8px] w-[min-content]"
              data-node-id="1:648"
            >
              Google Open Challenge 2025
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:649"
            >
              Advanced to the national finals through algorithm design and
              software engineering proficiency.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#777872] text-[9px] whitespace-pre"
              data-node-id="1:650"
            >{`AMAZON WEB SERVICES  ↗`}</p>
          </div>
          <div
            className="border-[#dedfd9] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip pt-[20px] relative"
            data-node-id="1:651"
            data-name="Notebook entry"
          >
            <div
              className="content-stretch flex font-['IBM_Plex_Mono:Regular'] items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[9px] w-full whitespace-nowrap"
              data-node-id="1:652"
              data-name="Entry metadata"
            >
              <p
                className="relative shrink-0 text-[#294beb]"
                data-node-id="1:653"
              >
                HACKATHON
              </p>
              <p
                className="relative shrink-0 text-[#777872]"
                data-node-id="1:654"
              >
                JUN 2025
              </p>
            </div>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#242522] text-[27px] tracking-[-0.8px] w-[min-content]"
              data-node-id="1:655"
            >
              JP Morgan Chase & Co. — Code For Good 2025
            </p>
            <p
              className="font-['Inter:Regular'] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#777872] text-[13px] w-[min-content]"
              data-node-id="1:656"
            >
              Selected among the top 160 students from more than 65,000
              applicants for the national software engineering hackathon.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] leading-[normal] relative shrink-0 text-[#777872] text-[9px] whitespace-pre"
              data-node-id="1:657"
            >{`AMAZON WEB SERVICES  ↗`}</p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#f4f4f0] content-stretch flex flex-col gap-[72px] items-start overflow-clip pt-[96px] px-[72px] relative shrink-0 w-full"
        id="contact"
        data-node-id="1:658"
        data-name="Contact and colophon"
      >
        <div
          className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
          data-node-id="1:659"
          data-name="Contact overline"
        >
          <p
            className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[10px] tracking-[1px] whitespace-nowrap"
            data-node-id="1:660"
          >
            08 — LET’S CONNECT
          </p>
          <div
            className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0"
            data-node-id="1:661"
            data-name="Availability"
          >
            <div
              className="relative shrink-0 size-[6px]"
              data-node-id="1:662"
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
              data-node-id="1:663"
            >
              LET’S CONNECT
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[120px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:664"
          data-name="Contact composition"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[28px] items-start min-w-px not-italic overflow-clip relative"
            data-node-id="1:665"
            data-name="Contact invitation"
          >
            <div
              className="leading-[0] min-w-full relative shrink-0 text-[#242522] text-[88px] tracking-[-5px] w-[min-content]"
              data-node-id="1:666"
            >
              <p className="leading-[1.08] mb-0">Let’s build</p>
              <p className="font-['Bodoni_Moda:Italic'] italic leading-[1.08] text-[#294beb]">
                something meaningful.
              </p>
            </div>
            <p
              className="leading-[1.8] relative shrink-0 text-[#777872] text-[15px] w-[380px]"
              data-node-id="1:667"
            >
              For engineering opportunities, research collaborations, or a good
              technical conversation, reach me at +91-7977019432.
            </p>
            <p
              className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] relative shrink-0 text-[#242522] text-[26px] tracking-[-0.7px] underline whitespace-nowrap"
              data-node-id="1:668"
            >
              pranav.djsce24@gmail.com ↗
            </p>
            <div
              className="content-stretch flex gap-[26px] items-start leading-[normal] overflow-clip relative shrink-0 text-[#242522] text-[12px] whitespace-nowrap"
              data-node-id="1:669"
              data-name="Social links"
            >
              <p className="relative shrink-0" data-node-id="1:670">
                GitHub ↗
              </p>
              <p className="relative shrink-0" data-node-id="1:671">
                LinkedIn ↗
              </p>
              <p className="relative shrink-0" data-node-id="1:672">
                Portfolio ↗
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-[410px]"
            data-node-id="1:673"
            data-name="Message form"
          >
            <div
              className="[word-break:break-word] border-[#dedfd9] border-b border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic overflow-clip pb-[16px] relative shrink-0 text-[#777872] w-full"
              data-node-id="1:674"
              data-name="Contact field"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[9px] whitespace-nowrap"
                data-node-id="1:675"
              >
                YOUR NAME
              </p>
              <p
                className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]"
                data-node-id="1:676"
              >
                Your name
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#dedfd9] border-b border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic overflow-clip pb-[16px] relative shrink-0 text-[#777872] w-full"
              data-node-id="1:677"
              data-name="Contact field"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[9px] whitespace-nowrap"
                data-node-id="1:678"
              >
                EMAIL ADDRESS
              </p>
              <p
                className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]"
                data-node-id="1:679"
              >
                you@example.com
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#dedfd9] border-b border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic overflow-clip pb-[40px] relative shrink-0 text-[#777872] w-full"
              data-node-id="1:680"
              data-name="Contact field"
            >
              <p
                className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[9px] whitespace-nowrap"
                data-node-id="1:681"
              >
                WHAT’S ON YOUR MIND?
              </p>
              <p
                className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]"
                data-node-id="1:682"
              >
                Tell me about the opportunity…
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
              data-node-id="1:683"
              data-name="Send message"
            >
              <div
                className="bg-[#294beb] content-stretch flex gap-[24px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[100px] shrink-0"
                data-node-id="1:684"
                data-name="Action"
              >
                <p
                  className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                  data-node-id="1:685"
                >
                  Send a little hello
                </p>
                <div
                  className="relative shrink-0 size-[17px]"
                  data-node-id="1:686"
                  data-name="arrow-up-right"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowUpRight1}
                  />
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['IBM_Plex_Mono:Regular'] leading-[normal] not-italic relative shrink-0 text-[#777872] text-[8px] whitespace-nowrap"
                data-node-id="1:688"
              >
                CONTACT FORM
              </p>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] border-[#dedfd9] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[32px] pt-[24px] relative shrink-0 w-full"
          data-node-id="1:689"
          data-name="Portfolio footer"
        >
          <div
            className="content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
            data-node-id="1:690"
            data-name="Colophon"
          >
            <p
              className="font-['Bodoni_Moda:Italic'] font-normal italic relative shrink-0 text-[#242522] text-[28px]"
              data-node-id="1:691"
            >
              Pranav Dharwadkar
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#777872] text-[9px]"
              data-node-id="1:692"
            >
              ENGINEERED WITH CURIOSITY. ALWAYS LEARNING.
            </p>
            <p
              className="font-['IBM_Plex_Mono:Regular'] not-italic relative shrink-0 text-[#242522] text-[9px]"
              data-node-id="1:693"
            >
              BACK TO TOP ↑
            </p>
          </div>
          <p
            className="font-['IBM_Plex_Mono:Regular'] leading-[1.8] not-italic relative shrink-0 text-[#777872] text-[8px] w-full"
            data-node-id="1:694"
          >{`© 2026 / PRANAV DHARWADKAR — AI/ML, SOFTWARE ENGINEERING, AND DEVOPS PORTFOLIO.`}</p>
        </div>
      </div>
    </div>
  )
}
