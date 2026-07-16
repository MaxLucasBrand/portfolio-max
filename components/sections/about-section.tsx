import {
  Cloud,
  Code2,
  Network,
  Server,
  Workflow,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

const areas = [
  {
    title: "Desenvolvimento",
    description:
      "Criação de aplicações web, APIs, integrações entre sistemas e soluções internas.",
    icon: Code2,
    color: "violet",
  },
  {
    title: "Infraestrutura",
    description:
      "Administração de servidores Linux, ambientes em nuvem, containers e serviços corporativos.",
    icon: Server,
    color: "orange",
  },
  {
    title: "Redes e monitoramento",
    description:
      "Conectividade entre unidades, VPNs, câmeras IP, RTSP e plataformas de monitoramento.",
    icon: Network,
    color: "violet",
  },
  {
    title: "Automação",
    description:
      "Desenvolvimento de scripts e fluxos para reduzir tarefas manuais e melhorar processos.",
    icon: Workflow,
    color: "orange",
  },
]

const highlights = [
  {
    value: "Full Stack",
    label: "Desenvolvimento",
  },
  {
    value: "Cloud",
    label: "Infraestrutura AWS",
  },
  {
    value: "DevOps",
    label: "Docker e Linux",
  },
  {
    value: "IA",
    label: "Automação inteligente",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="border-t py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="vice-card vice-neon-border relative overflow-hidden rounded-3xl p-7 sm:p-9 lg:sticky lg:top-5">
              <div className="absolute left-8 top-0 h-px w-24 bg-gradient-to-r from-violet-500/80 to-orange-500/80" />

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Sobre mim
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Tecnologia aplicada para{" "}
                <span className="vice-purple-text">
                  resolver
                </span>{" "}
                problemas{" "}
                <span className="vice-pink-text">
                  reais.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sou profissional de tecnologia com experiência em
                desenvolvimento de software, infraestrutura, redes, automação
                e suporte a ambientes corporativos.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                Minha atuação vai desde a identificação de uma necessidade até
                a implementação e manutenção da solução. Trabalho com
                aplicações web, APIs, bancos de dados, servidores Linux,
                ambientes em nuvem, containers e integrações entre diferentes
                sistemas.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                Busco construir soluções organizadas, seguras e fáceis de
                manter, sempre considerando o impacto da tecnologia nos
                processos e nas pessoas que utilizarão o sistema.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {areas.map((area) => {
                  const Icon = area.icon
                  const isViolet = area.color === "violet"

                  return (
                    <div
                      key={area.title}
                      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.035] ${isViolet
                          ? "hover:border-violet-500/30"
                          : "hover:border-orange-500/30"
                        }`}
                    >
                      <div
                        className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isViolet
                            ? "via-violet-500/60"
                            : "via-orange-500/60"
                          }`}
                      />

                      <div className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                        <Icon
                          className={`size-5 text-zinc-200 transition-colors duration-300 ${isViolet
                              ? "group-hover:text-violet-400"
                              : "group-hover:text-orange-400"
                            }`}
                        />
                      </div>

                      <h3 className="mt-7 text-lg font-semibold text-zinc-100">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {area.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="group rounded-xl border border-white/[0.08] bg-white/[0.015] p-4 text-center transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.035]"
                  >
                    <p className="text-base font-bold text-zinc-100 transition-colors duration-300 group-hover:text-violet-400">
                      {highlight.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.03]">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex gap-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                    <Cloud className="size-5 text-zinc-200 transition-colors duration-300 group-hover:text-violet-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      Da ideia até o ambiente de produção
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Além de desenvolver aplicações, também atuo na preparação
                      do ambiente, deploy, configuração de servidores,
                      monitoramento e manutenção dos serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}