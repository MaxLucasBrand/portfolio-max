import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-cyan-400/10"
    >
      {/* LUZES DE FUNDO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-28 size-[380px] rounded-full bg-purple-500/[0.12] blur-[130px]" />

        <div className="absolute -right-24 top-16 size-[380px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        <div className="absolute bottom-[-180px] left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-pink-500/[0.10] blur-[150px]" />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-pink-500/[0.04] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-5 py-24 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ================================================= */}
          {/* LADO ESQUERDO */}
          {/* ================================================= */}

          <div>
            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.035] px-4 py-2 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                <span className="relative inline-flex size-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(0,240,255,0.85)]" />
              </span>

              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/70 sm:text-xs">
                Desenvolvedor Full-Stack • Infraestrutura
              </p>
            </div>

            {/* NOME */}
            <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Olá, sou{" "}
              <span className="vice-neon-text">
                Max
                <br className="hidden lg:block" /> Brandão.
              </span>
            </h1>

            {/* FRASE PRINCIPAL */}
            <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-slate-300 sm:text-2xl lg:text-3xl">
              Transformo problemas reais em{" "}
              <span className="vice-pink-text">soluções tecnológicas.</span>
            </h2>

            {/* DESCRIÇÃO */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Desenvolvimento, infraestrutura e automação para criar soluções
              eficientes, escaláveis e aplicáveis a problemas reais.
            </p>

            {/* BOTÕES */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className={buttonVariants({
                  className:
                    "group rounded-xl border border-cyan-300/30 bg-cyan-400 px-5 font-semibold text-[#07111f] shadow-[0_0_35px_rgba(0,240,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(0,240,255,0.30)]",
                })}
              >
                Ver projetos
                <ArrowDown className="ml-2 size-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <a
                href="/CV – Max Brandão Atualizado.pdf"
                download
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "group rounded-xl border-pink-400/25 bg-pink-400/[0.035] px-5 text-pink-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/50 hover:bg-pink-400/[0.09] hover:text-white hover:shadow-[0_0_35px_rgba(255,92,168,0.12)]",
                })}
              >
                <Download className="mr-2 size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Baixar currículo
              </a>
            </div>

            {/* REDES SOCIAIS */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com/MaxLucasBrand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-400/[0.035] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-400/[0.1] hover:text-purple-300 hover:shadow-[0_0_25px_rgba(188,96,255,0.14)]"
              >
                <FaGithub className="size-[18px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/maxlucasbrandao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-pink-400/15 bg-pink-400/[0.035] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-400/[0.1] hover:text-pink-300 hover:shadow-[0_0_25px_rgba(255,92,168,0.14)]"
              >
                <FaLinkedin className="size-[18px]" />
              </a>
            </div>
          </div>

          {/* ================================================= */}
          {/* FOTO */}
          {/* ================================================= */}

          <div className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:ml-auto">
            {/* BRILHO ATRÁS DA FOTO */}
            <div className="absolute inset-6 rounded-[40px] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-400/20 blur-[50px]" />

            {/* LINHA DECORATIVA SUPERIOR */}
            <div className="absolute -left-7 -top-6 hidden h-20 w-44 border-l border-t border-purple-400/70 lg:block" />

            <div className="absolute -left-7 -top-6 hidden h-px w-20 bg-purple-400 shadow-[0_0_15px_rgba(192,100,255,0.7)] lg:block" />

            {/* LINHA DECORATIVA INFERIOR */}
            <div className="absolute -bottom-6 -right-7 hidden h-20 w-44 border-b border-r border-cyan-400/60 lg:block" />

            {/* PONTOS */}
            <div className="absolute -right-12 top-12 hidden grid-cols-5 gap-2 opacity-60 lg:grid">
              {Array.from({ length: 15 }).map((_, index) => (
                <span
                  key={index}
                  className="size-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                />
              ))}
            </div>

            {/* BORDA EXTERNA */}
            <div
              className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 p-[1px]"
              style={{
                clipPath:
                  "polygon(12% 0, 88% 0, 100% 10%, 100% 90%, 88% 100%, 12% 100%, 0 90%, 0 10%)",
              }}
            >
              {/* BORDA INTERNA */}
              <div
                className="relative overflow-hidden bg-[#060914]"
                style={{
                  clipPath:
                    "polygon(12% 0, 88% 0, 100% 10%, 100% 90%, 88% 100%, 12% 100%, 0 90%, 0 10%)",
                }}
              >
                {/* BRILHO DENTRO DA FOTO */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#060914]/30 via-transparent to-cyan-400/[0.04]" />

                {/* FOTO */}
                <img
                  src="/max-imagem.jpeg"
                  alt="Max Brandão"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* SOMBRA INFERIOR */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#060914]/70 to-transparent" />
              </div>
            </div>

            {/* DETALHE ROXO */}
            <div className="absolute -left-4 bottom-14 h-20 w-px bg-gradient-to-t from-transparent via-purple-400 to-transparent shadow-[0_0_12px_rgba(192,100,255,0.7)]" />

            {/* DETALHE CIANO */}
            <div className="absolute -right-4 top-20 h-24 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(0,240,255,0.7)]" />
          </div>
        </div>

        {/* SCROLL PARA PROJETOS */}
        <a
          href="#projetos"
          aria-label="Ir para projetos"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cyan-200/40 transition-colors hover:text-cyan-300 lg:flex"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
            Explorar
          </span>

          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-cyan-400/20 p-2">
            <span className="size-1.5 animate-bounce rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
          </div>
        </a>
      </div>
    </section>
  );
}
