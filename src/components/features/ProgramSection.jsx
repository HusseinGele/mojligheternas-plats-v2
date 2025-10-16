import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ChevronRight } from 'lucide-react'
import { programs } from '@/data/programs.jsx' // move your array here

export default function ProgramSection() {
  return (
    <section id="program" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Våra <span className="text-primary">Program</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi erbjuder olika program och aktiviteter som stöttar unga i deras utveckling och framtidsplaner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border border-border text-foreground hover:bg-accent transition-colors h-full">
                <CardHeader>
                  <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                    {program.icon}
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                  <Button variant="ghost" className="mt-4 text-primary hover:text-primary/80 p-0">
                    Läs mer <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
