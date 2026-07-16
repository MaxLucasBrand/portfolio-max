import type { ElementType } from "react"

import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  ExternalLink,
  LockKeyhole,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Project = {
  title: string
  description: string
  category: string
  status: string
  technologies: string[]
  icon: ElementType
  githubUrl?: string
  projectUrl?: string
}

const featuredProject = {
  title: "Sistema Inteligente de Monitoramento",
  description:
    "Plataforma corporativa para centralização, visualização e gerenciamento de câmeras de diferentes unidades em um único ambiente.",
  details:
    "A solução utiliza infraestrutura em nuvem, conexões VPN e processamento de vídeo para oferecer acesso controlado, monitoramento em tempo real e preparação para recursos de inteligência artificial.",
  technologies: [
    "AWS",
    "Docker",
    "Shinobi",
    "FFmpeg",
    "Linux",
    "VPN",
    "Nginx",
  ],
  results: [
    {
      value: "70+",
      label: "Câmeras conectadas",
    },
    {
      value: "24/7",
      label: "Monitoramento",
    },
    {
      value: "Cloud",
      label: "Infraestrutura",
    },
  ],
  features: [
    "Centralização de múltiplas unidades",
    "Controle individual de usuários",
    "Transmissão de vídeo em tempo real",
    "Preparação para transcrição com IA",
  ],
  projectUrl: "#",
  githubUrl: "#",
}

const projects: Project[] = [
  {
    title: "MeshCentral",
    description:
      "Sistema open source implantado para acesso remoto, gerenciamento e suporte aos dispositivos corporativos.",
    category: "Infraestrutura",
    status: "Implantado",
    technologies: ["AWS", "Linux", "Nginx", "Docker"],
    icon: MonitorCog,
    githubUrl: "#",
    projectUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 size-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-96 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Cabeçalho */}
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Projetos
                </p>

                <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Projetos que transformam{" "}
                <span className="purple-text">ideias</span> em soluções{" "}
                <span className="orange-text">reais.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Soluções desenvolvidas para resolver desafios de
                infraestrutura, automação, integração de sistemas,
                monitoramento e inteligência artificial.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 sm:block">
                <p className="text-2xl font-black text-primary">
                  02
                </p>

                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Projetos
                </p>
              </div>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "h-12 border-white/10 bg-white/[0.02] px-5 hover:border-primary/30 hover:bg-primary/5"
                )}
              >
                <FaGithub className="size-4" />
                Ver GitHub
              </a>
            </div>
          </div>

          {/* Projeto em destaque */}
          <Card className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#0b0b10]/90 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-primary/15 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-orange-500/5 blur-[100px]" />

            <CardContent className="relative p-0">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Conteúdo */}
                <div className="flex flex-col justify-center border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="border border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
                      <Sparkles className="mr-1 size-3" />
                      Projeto em destaque
                    </Badge>

                    <Badge
                      variant="outline"
                      className="border-white/10 bg-white/[0.02] text-muted-foreground"
                    >
                      Infraestrutura e segurança
                    </Badge>
                  </div>

                  <h3 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                    {featuredProject.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {featuredProject.details}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {featuredProject.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="outline"
                        className="border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={featuredProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          size: "lg",
                        }),
                        "h-12 px-6 font-bold shadow-lg shadow-primary/15"
                      )}
                    >
                      Ver projeto
                      <ArrowUpRight className="size-4" />
                    </a>

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                        }),
                        "h-12 border-white/10 bg-white/[0.02] px-6 hover:border-primary/30 hover:bg-primary/5"
                      )}
                    >
                      <FaGithub className="size-4" />
                      Código-fonte
                    </a>
                  </div>

                  {/* Indicadores */}
                  <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
                    {featuredProject.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                      >
                        <p className="text-xl font-black text-primary sm:text-2xl">
                          {result.value}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Painel visual */}
                <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-black/20 p-6 sm:p-8 lg:min-h-[520px] lg:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.12),transparent_65%)]" />

                  <div className="relative w-full max-w-md">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08080d] shadow-2xl shadow-primary/10">
                      <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-red-400/70" />
                          <span className="size-2.5 rounded-full bg-yellow-400/70" />
                          <span className="size-2.5 rounded-full bg-green-400/70" />
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          <LockKeyhole className="size-3" />
                          Ambiente seguro
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Monitoramento
                            </p>

                            <p className="mt-1 text-sm font-bold">
                              Câmeras em tempo real
                            </p>
                          </div>

                          <Badge className="border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10">
                            Online
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((camera) => (
                            <div
                              key={camera}
                              className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-primary/10 via-black to-black"
                            >
                              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:20px_20px]" />

                              <Camera className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-primary/50" />

                              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 text-[9px] text-white/70">
                                <span className="size-1.5 rounded-full bg-emerald-400" />
                                Câmera {camera}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-3">
                          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                            <Network className="size-4 text-primary" />

                            <p className="mt-2 text-xs font-bold">
                              VPN
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                            <Server className="size-4 text-primary" />

                            <p className="mt-2 text-xs font-bold">
                              AWS
                            </p>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                            <ShieldCheck className="size-4 text-primary" />

                            <p className="mt-2 text-xs font-bold">
                              Seguro
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recursos */}
              <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 border-b border-white/10 p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />

                    <p className="text-sm leading-6 text-muted-foreground">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Outro projeto */}
          <div className="mt-16">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Outro projeto
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                Solução implantada
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Projeto voltado para infraestrutura, acesso remoto e
                administração de dispositivos corporativos.
              </p>
            </div>

            <div className="max-w-xl">
              {projects.map((project) => {
                const Icon = project.icon

                return (
                  <Card
                    key={project.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10]/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                  >
                    <CardHeader className="relative p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
                          <Icon className="size-5" />
                        </div>

                        <Badge
                          variant="outline"
                          className="border-white/10 bg-white/[0.02] text-xs text-muted-foreground"
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {project.category}
                      </p>

                      <CardTitle className="mt-2 text-xl font-black tracking-tight">
                        {project.title}
                      </CardTitle>

                      <CardDescription className="mt-3 leading-6">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative mt-auto p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <Badge
                            key={technology}
                            variant="outline"
                            className="border-white/10 bg-white/[0.02] text-[11px] text-muted-foreground"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                        {project.projectUrl && (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({
                                size: "sm",
                              }),
                              "font-bold"
                            )}
                          >
                            Visualizar
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({
                                variant: "outline",
                                size: "sm",
                              }),
                              "border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5"
                            )}
                          >
                            <FaGithub className="size-3.5" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}