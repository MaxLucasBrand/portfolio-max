"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const glow = glowRef.current

      if (!glow) return

      glow.animate(
        {
          transform: `translate3d(
            ${event.clientX - 250}px,
            ${event.clientY - 250}px,
            0
          )`,
        },
        {
          duration: 1200,
          fill: "forwards",
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }
      )
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Cor base */}
      <div className="absolute inset-0 bg-[#071226]" />

      {/* Grade */}
      <div className="portfolio-grid absolute inset-[-100px] opacity-60" />

      {/* Luz azul */}
      <div className="portfolio-orb portfolio-orb-blue absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full" />

      {/* Luz roxa */}
      <div className="portfolio-orb portfolio-orb-purple absolute -bottom-52 -left-40 h-[700px] w-[700px] rounded-full" />

      {/* Luz rosa */}
      <div className="portfolio-orb portfolio-orb-pink absolute bottom-[-260px] left-1/2 h-[650px] w-[750px] rounded-full" />

      {/* Glow do mouse */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.08] blur-[100px]"
      />

      {/* Vinheta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(3,8,22,0.60)_100%)]" />
    </div>
  )
}