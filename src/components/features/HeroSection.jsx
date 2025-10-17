import { motion } from "framer-motion"
import { Button } from "@/components/ui/button.jsx"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hem" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url("/heroImge.jpeg")`,
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance drop-shadow-lg"
        >
          Skapar <span className="text-primary">trygga rum</span>
          <br />
          där unga kan <span className="text-accent">växa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          Möjligheternas Plats är en förening som bygger broar mellan unga, fritidsgårdar och samhället.
          Vi vänder oss till ungdomar mellan 8–25 år och arbetar både lokalt och internationellt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:opacity-90 text-primary-foreground text-lg px-8 py-3 transition-all duration-300 shadow-md"
          >
            Upptäck våra program
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3 transition-all duration-300"
          >
            Läs mer om oss
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
