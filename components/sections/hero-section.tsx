import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Code2,
  Download,
  Server,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { buttonVariants } from "@/components/ui/button"

const technologies = [
  {
    label: "Desenvolvimento",
    description: "Aplicações web, APIs e integrações.",
    icon: Code2,
    color: "cyan",
  },
  {
    label: "Cloud e AWS",
    description: "Infraestrutura, deploy e ambientes em nuvem.",
    icon: Cloud,
    color: "pink",
  },
  {
    label: "Linux e Docker",
    description: "Servidores, containers e monitoramento.",
    icon: Server,
    color: "purple",
  },
]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-cyan-400/10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-28 size-[420px] rounded-full bg-purple-500/[0.13] blur-[130px]" />

        <div className="absolute -right-24 top-16 size-[400px] rounded-full bg-cyan-400/[0.09] blur-[130px]" />

        <div className="absolute bottom-[-160px] left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-pink-500/[0.12] blur-[150px]" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-pink-500/[0.05] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-28 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.035] px-4 py-2 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(0,240,255,0.85)]" />
              </span>

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-100/70 sm:text-sm">
                Tecnologia • Infraestrutura • Desenvolvimento
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Olá, sou{" "}
              <span className="vice-neon-text">
                Max Brandão.
              </span>
            </h1>

            <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-slate-300 sm:text-4xl">
              Transformo problemas reais em{" "}
              <span className="vice-pink-text">
                soluções tecnológicas.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Profissional de Tecnologia da Informação com experiência em
              infraestrutura, servidores, AWS, Docker, automações, integrações,
              bancos de dados e desenvolvimento de sistemas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "group rounded-xl border border-cyan-300/30 bg-cyan-400 px-6 font-semibold text-[#07111f] shadow-[0_0_35px_rgba(0,240,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(0,240,255,0.32)]",
                })}
              >
                Ver projetos

                <ArrowDown className="ml-2 size-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <a
                href="/CV – Max Brandão Atualizado.pdf"
                download
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "group rounded-xl border-pink-400/25 bg-pink-400/[0.035] px-6 text-pink-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/50 hover:bg-pink-400/[0.09] hover:text-white hover:shadow-[0_0_35px_rgba(255,92,168,0.12)]",
                })}
              >
                <Download className="mr-2 size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />

                Baixar currículo
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/MaxLucasBrand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar GitHub"
                className="flex size-11 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-400/[0.035] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-400/[0.1] hover:text-purple-300 hover:shadow-[0_0_25px_rgba(188,96,255,0.14)]"
              >
                <FaGithub className="size-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/maxlucasbrandao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar LinkedIn"
                className="flex size-11 items-center justify-center rounded-xl border border-pink-400/15 bg-pink-400/[0.035] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-400/[0.1] hover:text-pink-300 hover:shadow-[0_0_25px_rgba(255,92,168,0.14)]"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-cyan-400/[0.11] via-purple-500/[0.08] to-pink-500/[0.12] blur-2xl" />

            <div className="vice-card vice-neon-border relative overflow-hidden rounded-[28px] p-6 sm:p-8">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

              <div className="absolute right-0 top-0 size-40 bg-pink-500/[0.07] blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/65">
                    Perfil profissional
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-slate-100">
                    Desenvolvimento e{" "}
                    <span className="vice-purple-text">
                      infraestrutura
                    </span>
                  </h3>
                </div>

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-pink-400/20 bg-pink-400/[0.06] text-pink-300">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>

              <p className="relative mt-5 text-sm leading-7 text-slate-400">
                Atuação completa desde a identificação do problema até a
                implementação, publicação e manutenção da solução.
              </p>

              <div className="relative mt-8 space-y-3">
                {technologies.map((technology) => {
                  const Icon = technology.icon

                  const iconColor = {
                    cyan: "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
                    pink: "border-pink-400/20 bg-pink-400/[0.06] text-pink-300",
                    purple:
                      "border-purple-400/20 bg-purple-400/[0.06] text-purple-300",
                  }[technology.color]

                  return (
                    <div
                      key={technology.label}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#080c25]/45 p-4 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]"
                    >
                      <div
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${iconColor}`}
                      >
                        <Icon className="size-5" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          {technology.label}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {technology.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-cyan-400/10 pt-5">
                <div>
                  <p className="text-xs text-slate-500">
                    Foco profissional
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Soluções reais para ambientes reais
                  </p>
                </div>

                <span className="rounded-full border border-pink-400/20 bg-pink-400/[0.07] px-3 py-1 text-xs font-medium text-pink-300 shadow-[0_0_20px_rgba(255,92,168,0.08)]">
                  Disponível
                </span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#sobre"
          aria-label="Ir para a seção sobre mim"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cyan-200/50 transition-colors hover:text-cyan-300 lg:flex"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Explorar
          </span>

          <div className="flex h-10 w-7 items-start justify-center rounded-full border border-cyan-400/20 p-2 shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
          </div>
        </a>
      </div>
    </section>
  )
}