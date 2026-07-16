import type { ElementType } from "react"

import {
  Cloud,
  Code2,
  Container,
  Database,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { FaAws } from "react-icons/fa"
import {
  SiDocker,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type MainTechnology = {
  name: string
  icon: ElementType
  iconClassName: string
  hoverClassName: string
  glowClassName: string
}

type TechnologyGroup = {
  title: string
  description: string
  icon: ElementType
  technologies: string[]
  featured?: boolean
}

const mainTechnologies: MainTechnology[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconClassName: "text-cyan-300",
    hoverClassName: "hover:border-cyan-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconClassName: "text-pink-300",
    hoverClassName: "hover:border-pink-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(255,92,168,0.8)]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    iconClassName: "text-purple-300",
    hoverClassName: "hover:border-purple-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(188,96,255,0.8)]",
  },
  {
    name: "React",
    icon: SiReact,
    iconClassName: "text-cyan-300",
    hoverClassName: "hover:border-cyan-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconClassName: "text-purple-300",
    hoverClassName: "hover:border-purple-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(188,96,255,0.8)]",
  },
  {
    name: "Docker",
    icon: SiDocker,
    iconClassName: "text-cyan-300",
    hoverClassName: "hover:border-cyan-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]",
  },
  {
    name: "AWS",
    icon: FaAws,
    iconClassName: "text-orange-300",
    hoverClassName: "hover:border-orange-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(255,184,107,0.8)]",
  },
  {
    name: "Linux",
    icon: SiLinux,
    iconClassName: "text-pink-300",
    hoverClassName: "hover:border-pink-400/40",
    glowClassName:
      "group-hover:drop-shadow-[0_0_12px_rgba(255,92,168,0.8)]",
  },
]

const technologyGroups: TechnologyGroup[] = [
  {
    title: "Desenvolvimento Front-end",
    description:
      "Criação de interfaces modernas, responsivas e integradas com APIs e serviços externos.",
    icon: Code2,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML",
      "CSS",
    ],
    featured: true,
  },
  {
    title: "Back-end e APIs",
    description:
      "Desenvolvimento de APIs, integrações entre sistemas, validação de dados e regras de negócio.",
    icon: Server,
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "REST API",
      "Python",
    ],
    featured: true,
  },
  {
    title: "Bancos de Dados",
    description:
      "Modelagem, consultas, integrações, manutenção e processamento de dados corporativos.",
    icon: Database,
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "SQL",
      "DBeaver",
      "Prisma",
    ],
  },
  {
    title: "Cloud e Infraestrutura",
    description:
      "Implantação e manutenção de aplicações e serviços em ambientes Linux e nuvem.",
    icon: Cloud,
    technologies: [
      "AWS",
      "EC2",
      "Linux",
      "Ubuntu Server",
      "Nginx",
      "DNS",
      "SSL",
    ],
    featured: true,
  },
  {
    title: "Containers e DevOps",
    description:
      "Padronização de ambientes, deploy de aplicações e gerenciamento de serviços em containers.",
    icon: Container,
    technologies: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Shell Script",
    ],
  },
  {
    title: "Redes e Monitoramento",
    description:
      "Conectividade entre unidades, acesso remoto e administração de ambientes de monitoramento.",
    icon: Network,
    technologies: [
      "VPN",
      "RTSP",
      "TCP/IP",
      "FFmpeg",
      "Shinobi",
      "NVR",
      "CFTV IP",
    ],
  },
  {
    title: "Automação e Serviços",
    description:
      "Criação de fluxos, scripts e integrações para reduzir atividades manuais e centralizar processos.",
    icon: Workflow,
    technologies: [
      "PowerShell",
      "Bash",
      "Jira",
      "Jira Service Management",
      "Cron Jobs",
    ],
  },
  {
    title: "Segurança e Administração",
    description:
      "Organização de acessos, permissões, ambientes corporativos e serviços internos.",
    icon: ShieldCheck,
    technologies: [
      "Active Directory",
      "Controle de Acesso",
      "Google Workspace",
      "Microsoft 365",
      "Firewall",
      "SSH",
    ],
  },
]

export function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden border-t border-cyan-400/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 size-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-80 rounded-full bg-pink-500/[0.08] blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300/70">
              Tecnologias
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Ferramentas que fazem parte do meu{" "}
              <span className="gradient-text">ecossistema.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Minha experiência combina desenvolvimento de software,
              infraestrutura, cloud e automação para construir soluções
              completas, integradas e preparadas para ambientes reais.
            </p>
          </div>

          <Card className="glow-card relative mb-8 overflow-hidden rounded-2xl border-cyan-400/20">
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 size-56 rounded-full bg-pink-500/[0.07] blur-3xl" />

            <CardContent className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                    <Code2 className="size-6" />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Tecnologias principais
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Stack principal
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                    Tecnologias presentes no meu dia a dia em projetos de
                    desenvolvimento, integrações, servidores e infraestrutura.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {mainTechnologies.map((technology) => {
                    const Icon = technology.icon

                    return (
                      <div
                        key={technology.name}
                        className={`group relative flex min-h-24 flex-col items-center justify-center overflow-hidden rounded-xl border border-cyan-400/10 bg-[#080c25]/45 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.025] hover:shadow-xl ${technology.hoverClassName}`}
                      >
                        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <Icon
                          className={`size-8 transition-all duration-300 group-hover:scale-110 ${technology.iconClassName} ${technology.glowClassName}`}
                        />

                        <span className="mt-3 text-sm font-bold text-slate-100">
                          {technology.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group) => {
              const Icon = group.icon

              return (
                <Card
                  key={group.title}
                  className={`glow-card group flex h-full flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-400/5 ${
                    group.featured
                      ? "border-cyan-400/25"
                      : "border-white/5 hover:border-cyan-400/25"
                  }`}
                >
                  <CardHeader className="relative">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.06)] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400 group-hover:text-[#07111f] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]">
                        <Icon className="size-5" />
                      </div>

                      {group.featured && (
                        <Badge className="border border-pink-400/20 bg-pink-400/[0.07] text-pink-300 hover:bg-pink-400/[0.1]">
                          Principal
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="text-xl font-bold tracking-tight">
                      {group.title}
                    </CardTitle>

                    <CardDescription className="mt-3 min-h-20 leading-6">
                      {group.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative mt-auto">
                    <div className="mb-5 h-px bg-gradient-to-r from-cyan-400/15 via-purple-400/10 to-transparent" />

                    <div className="flex flex-wrap gap-2">
                      {group.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-100"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}