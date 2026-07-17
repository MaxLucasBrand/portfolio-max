import { Terminal } from "lucide-react"

const navigation = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Tecnologias",
    href: "#tecnologias",
  },
  {
    label: "Contato",
    href: "#contato",
  },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-5">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center rounded-2xl border border-white/5 bg-black/50 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
          <a
            href="#inicio"
            className="flex items-center gap-3 justify-self-start"
          >
            <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary shadow-lg shadow-primary/10">
              <Terminal className="size-5" />
            </div>

            <div className="hidden items-center gap-1 text-sm font-black uppercase tracking-[0.12em] sm:flex">
              <span>Max</span>
              <span className="text-primary">Brandão</span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header-nav-link text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div aria-hidden="true" />
        </div>
      </div>
    </header>
  )
}