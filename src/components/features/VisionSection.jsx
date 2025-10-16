import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Users, Target } from 'lucide-react'

export default function VisionSection() {
  return (
    <section id="om-oss" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vår <span className="text-primary">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi tror på varje ungs potential och arbetar för att skapa möjligheter där alla kan hitta sin väg i livet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Trygghet */}
          <Card className="bg-card border border-border text-foreground">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Trygghet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Vi skapar trygga miljöer där unga kan vara sig själva och våga växa.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Gemenskap */}
          <Card className="bg-card border border-border text-foreground">
            <CardHeader>
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle>Gemenskap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tillsammans är vi starkare. Vi bygger nätverk och varaktiga relationer.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Utveckling */}
          <Card className="bg-card border border-border text-foreground">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Utveckling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Vi ger verktyg och stöd för personlig utveckling och framtidstro.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
