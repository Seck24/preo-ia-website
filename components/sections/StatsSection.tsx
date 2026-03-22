"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, TrendingUp, ThumbsUp, MapPin } from "lucide-react"

const stats = [
  { value: 50, suffix: "+", label: "PME accompagnées", icon: Users },
  { value: 3, suffix: "x", label: "ROI moyen constaté", icon: TrendingUp },
  { value: 98, suffix: "%", label: "Clients satisfaits", icon: ThumbsUp },
  { value: 5, suffix: " pays", label: "Présence en Afrique", icon: MapPin },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-outfit font-bold text-4xl sm:text-5xl text-[#1F8A4C]">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-[#EBF5F0] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1F8A4C] transition-colors duration-300">
                  <Icon size={24} className="text-[#1F8A4C] group-hover:text-white transition-colors duration-300" />
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-[#374151] mt-2 text-sm font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
