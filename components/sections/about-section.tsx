import { Cloud, Code2, Network, Server, Workflow } from "lucide-react";

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
];

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
];

export function AboutSection() {
  return (
    <section id="sobre" className="border-t py-16 sm:py-20">
      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* CARD SOBRE MIM */}
            <div className="vice-card vice-neon-border relative overflow-hidden rounded-2xl p-5 sm:p-6 lg:sticky lg:top-24">
              <div className="absolute left-6 top-0 h-px w-20 bg-gradient-to-r from-violet-500/80 to-orange-500/80" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Sobre mim
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Tecnologia aplicada para{" "}
                <span className="vice-purple-text">resolver</span> problemas{" "}
                <span className="vice-pink-text">reais.</span>
              </h2>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Sou profissional de tecnologia com experiência em
                desenvolvimento de software, infraestrutura, redes, automação e
                suporte a ambientes corporativos.
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Minha atuação vai desde a identificação de uma necessidade até a
                implementação e manutenção da solução. Trabalho com aplicações
                web, APIs, bancos de dados, servidores Linux, ambientes em
                nuvem, containers e integrações entre diferentes sistemas.
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Busco construir soluções organizadas, seguras e fáceis de
                manter, sempre considerando o impacto da tecnologia nos
                processos e nas pessoas que utilizarão o sistema.
              </p>
            </div>

            {/* LADO DIREITO */}
            <div className="space-y-3">
              {/* ÁREAS */}
              <div className="grid gap-3 sm:grid-cols-2">
                {areas.map((area) => {
                  const Icon = area.icon;
                  const isViolet = area.color === "violet";

                  return (
                    <div
                      key={area.title}
                      className={`group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.035] ${
                        isViolet
                          ? "hover:border-violet-500/30"
                          : "hover:border-orange-500/30"
                      }`}
                    >
                      <div
                        className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                          isViolet ? "via-violet-500/60" : "via-orange-500/60"
                        }`}
                      />

                      <div className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                        <Icon
                          className={`size-4 text-zinc-200 transition-colors duration-300 ${
                            isViolet
                              ? "group-hover:text-violet-400"
                              : "group-hover:text-orange-400"
                          }`}
                        />
                      </div>

                      <h3 className="mt-4 text-base font-semibold text-zinc-100">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-zinc-400">
                        {area.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="group rounded-lg border border-white/[0.08] bg-white/[0.015] p-3 text-center transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.035]"
                  >
                    <p className="text-sm font-bold text-zinc-100 transition-colors duration-300 group-hover:text-violet-400">
                      {highlight.value}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-zinc-500">
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* PRODUÇÃO */}
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] p-4 transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.03]">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                    <Cloud className="size-4 text-zinc-200 transition-colors duration-300 group-hover:text-violet-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100">
                      Da ideia até o ambiente de produção
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-zinc-400">
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
  );
}
