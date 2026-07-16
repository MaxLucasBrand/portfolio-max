import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  MonitorCog,
  ServerCog,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const responsibilities = [
  "Atendimento e suporte técnico presencial e remoto aos colaboradores",
  "Administração e manutenção da infraestrutura tecnológica",
  "Administração de contas, acessos e permissões em sistemas corporativos",
  "Automação de processos internos e atividades operacionais",
  "Integração entre sistemas e serviços corporativos",
  "Administração de usuários e políticas no Active Directory",
  "Administração e estruturação do Jira Service Management",
  "Implantação e administração de ambientes Linux utilizando Docker",
  "Criação de documentação técnica e padronização de processos",
]

const projects = [
  {
    title: "MeshCentral",
    description:
      "Implantação de uma plataforma centralizada para acesso remoto e gerenciamento de dispositivos corporativos.",
    category: "Acesso remoto",
    icon: MonitorCog,
  },
  {
    title: "Shinobi",
    description:
      "Implantação de uma plataforma em nuvem para visualização e monitoramento das câmeras das unidades.",
    category: "Monitoramento",
    icon: ServerCog,
  },
]

const technologies = [
  "AWS",
  "Docker",
  "Linux",
  "Ubuntu",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "PowerShell",
  "Git",
  "GitHub",
  "Nginx",
  "REST API",
  "Shinobi",
  "MeshCentral",
]

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 size-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-80 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Título da seção */}
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Experiência profissional
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Minha trajetória construindo{" "}
              <span className="purple-text">soluções</span> para problemas{" "}
              <span className="orange-text">reais.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Ao longo da minha atuação na TVLAR Motors, participei da
              implantação de soluções de infraestrutura, desenvolvimento
              interno, monitoramento corporativo e automação de processos que
              contribuíram para aumentar a eficiência operacional da empresa.
            </p>
          </div>

          {/* Linha da experiência */}
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-primary via-primary/30 to-transparent lg:block" />

            <div className="relative lg:pl-16">
              <div className="absolute left-0 top-8 hidden size-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-lg shadow-primary/20 lg:flex">
                <BriefcaseBusiness className="size-5" />
              </div>

              <Card className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/90 shadow-2xl shadow-black/30 backdrop-blur-xl">
                {/* Cabeçalho da experiência */}
                <div className="relative border-b border-white/10 p-6 sm:p-8 lg:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />

                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary sm:size-14 sm:rounded-2xl">
                        <Building2 className="size-6" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                            TVLAR Motors
                          </h3>

                          <Badge className="border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10">
                            Atual
                          </Badge>
                        </div>

                        <p className="mt-2 text-base font-medium text-muted-foreground sm:text-lg">
                          Analista de Suporte de TI Jr
                        </p>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                          Atuo na equipe de Tecnologia da Informação, sendo
                          responsável pela manutenção da infraestrutura,
                          implantação de soluções em nuvem, desenvolvimento de
                          automações, administração de servidores e integração
                          entre sistemas corporativos.
                        </p>
                      </div>
                    </div>

                    <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-muted-foreground">
                      <CalendarDays className="size-4 shrink-0 text-primary" />

                      <span>Agosto de 2025 — Atualmente</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Responsabilidades */}
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <CheckCircle2 className="size-5" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                          Atuação
                        </p>

                        <h4 className="mt-1 text-xl font-bold">
                          Principais responsabilidades
                        </h4>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {responsibilities.map((responsibility) => (
                        <div
                          key={responsibility}
                          className="group flex min-h-20 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.04]"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />

                          <p className="text-sm leading-6 text-muted-foreground transition-colors group-hover:text-foreground">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projetos */}
                  <div className="mt-14 border-t border-white/10 pt-10">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                        <ServerCog className="size-5" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                          Entregas
                        </p>

                        <h4 className="mt-1 text-xl font-bold">
                          Projetos implantados
                        </h4>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {projects.map((project, index) => {
                        const Icon = project.icon

                        return (
                          <article
                            key={project.title}
                            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/[0.03] hover:shadow-xl hover:shadow-orange-500/5 sm:p-6"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                                <Icon className="size-5" />
                              </div>

                              <span className="text-sm font-black tracking-[0.2em] text-white/15">
                                0{index + 1}
                              </span>
                            </div>

                            <Badge
                              variant="outline"
                              className="mt-5 w-fit border-orange-500/20 bg-orange-500/5 text-orange-400"
                            >
                              {project.category}
                            </Badge>

                            <h5 className="mt-4 text-xl font-bold">
                              {project.title}
                            </h5>

                            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                              {project.description}
                            </p>

                            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                              Projeto corporativo
                            </p>
                          </article>
                        )
                      })}
                    </div>
                  </div>

                  {/* Tecnologias */}
                  <div className="mt-14 border-t border-white/10 pt-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Stack utilizada
                    </p>

                    <h4 className="mt-2 text-xl font-bold">
                      Tecnologias e ferramentas
                    </h4>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}