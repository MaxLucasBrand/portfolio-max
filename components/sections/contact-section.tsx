import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactInformation = [
  {
    label: "E-mail",
    value: "maxlucasbra@gmail.com",
    href: "mailto:maxlucasbra@gmail.com",
    icon: Mail,
  },
  {
    label: "Localização",
    value: "Manaus, Amazonas — Brasil",
    icon: MapPin,
  },
  {
    label: "Disponibilidade",
    value: "Aberto a oportunidades e novos projetos",
    icon: MessageSquare,
  },
]

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 size-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-96 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Cabeçalho */}
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Contato
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Vamos transformar{" "}
              <span className="purple-text">ideias</span> em novos{" "}
              <span className="orange-text">projetos.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Entre em contato para conversar sobre oportunidades
              profissionais, desenvolvimento de sistemas, infraestrutura,
              automações ou colaboração em projetos.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
            {/* Informações de contato */}
            <Card className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/90 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <CardHeader className="relative border-b border-white/10 p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                    <MessageSquare className="size-5" />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Vamos conversar
                  </p>

                  <CardTitle className="mt-2 text-2xl font-black tracking-tight">
                    Informações de contato
                  </CardTitle>

                  <CardDescription className="mt-3 max-w-md leading-7">
                    Você pode entrar em contato diretamente por e-mail ou
                    acessar minhas redes profissionais.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-6 sm:p-8">
                <div className="space-y-3">
                  {contactInformation.map((contact) => {
                    const Icon = contact.icon

                    const content = (
                      <>
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
                          <Icon className="size-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                            {contact.label}
                          </p>

                          <div className="mt-1 flex items-center gap-2">
                            <p className="break-words text-sm font-medium leading-6 text-foreground sm:text-base">
                              {contact.value}
                            </p>

                            {contact.href && (
                              <ArrowUpRight className="size-4 shrink-0 text-primary" />
                            )}
                          </div>
                        </div>
                      </>
                    )

                    if (contact.href) {
                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.04]"
                        >
                          {content}
                        </a>
                      )
                    }

                    return (
                      <div
                        key={contact.label}
                        className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03]"
                      >
                        {content}
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Redes profissionais
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://github.com/seu-usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Acessar perfil no GitHub"
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className:
                          "h-12 justify-start border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5",
                      })}
                    >
                      <FaGithub className="size-5" />
                      GitHub
                      <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/maxlucasbrandao/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Acessar perfil no LinkedIn"
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className:
                          "h-12 justify-start border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5",
                      })}
                    >
                      <FaLinkedin className="size-5" />
                      LinkedIn
                      <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />

                  <div>
                    <p className="text-sm font-semibold text-emerald-400">
                      Disponível para conversar
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Responderei sua mensagem assim que possível.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulário */}
            <Card className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b10]/90 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <CardHeader className="relative border-b border-white/10 p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-orange-500/5 blur-3xl" />

                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 shadow-lg shadow-orange-500/5">
                    <Send className="size-5" />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    Envie sua mensagem
                  </p>

                  <CardTitle className="mt-2 text-2xl font-black tracking-tight">
                    Como posso ajudar?
                  </CardTitle>

                  <CardDescription className="mt-3 leading-7">
                    Preencha os campos abaixo com as informações sobre sua
                    oportunidade, projeto ou proposta.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-6 sm:p-8">
                <form className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2.5">
                      <Label
                        htmlFor="nome"
                        className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        Nome
                      </Label>

                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome"
                        autoComplete="name"
                        required
                        className="h-12 rounded-xl border-white/10 bg-black/30 px-4 transition-colors placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        E-mail
                      </Label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        autoComplete="email"
                        required
                        className="h-12 rounded-xl border-white/10 bg-black/30 px-4 transition-colors placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <Label
                      htmlFor="assunto"
                      className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      Assunto
                    </Label>

                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      placeholder="Sobre o que você deseja conversar?"
                      required
                      className="h-12 rounded-xl border-white/10 bg-black/30 px-4 transition-colors placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label
                      htmlFor="mensagem"
                      className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      Mensagem
                    </Label>

                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte um pouco sobre o projeto, oportunidade ou proposta..."
                      className="min-h-44 resize-none rounded-xl border-white/10 bg-black/30 p-4 transition-colors placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-5 text-muted-foreground">
                      Ao enviar, suas informações serão utilizadas apenas para
                      responder ao contato.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 rounded-xl px-6 font-bold shadow-lg shadow-primary/15"
                    >
                      Enviar mensagem
                      <Send className="size-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}