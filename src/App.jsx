
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Heart, Users, Target, Calendar, Mail, Phone, MapPin, ChevronRight, Star, Globe, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/features/HeroSection'
import VisionSection from './components/features/VisionSection'
import ProgramSection from './components/features/ProgramSection'

function App() {


 

  const testimonials = [
    {
      text: "Möjligheternas Plats har gett mig verktyg att tro på mig själv och mina drömmar. Här känner jag mig trygg och välkommen.",
      name: "Sara, 17 år",
      program: "Ledarskapsutbildning"
    },
    {
      text: "Genom Dreamacademy har jag lärt mig att våga tänka stort och att mina idéer faktiskt kan bli verklighet.",
      name: "Ahmed, 19 år",
      program: "Dreamacademy"
    },
    {
      text: "Det bästa med Möjligheternas Plats är gemenskapen. Vi stöttar varandra och växer tillsammans.",
      name: "Emma, 16 år",
      program: "Summercamp"
    }
  ]

  const partners = [
    { name: "Postkodstiftelsen", type: "Finansiär" },
    { name: "Stockholms Kommun", type: "Samarbetspartner" },
    { name: "Erasmus+", type: "EU-projekt" },
    { name: "Future Narrativ", type: "Internationellt projekt" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <Navbar/>


      {/* Hero Section */}
     <HeroSection/>


      {/* Om oss Section */}
      <VisionSection/>


      {/* Program Section */}
       <ProgramSection/>


      {/* Testimonials Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vad våra <span className="text-primary">ungdomar</span> säger
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border border-border text-foreground h-full">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Våra <span className="text-primary">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Vi samarbetar med starka partners för att maximera vår påverkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-card border border-border text-foreground text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {partner.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}

      <section id="kontakt" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kom i <span className="text-primary">Kontakt</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Vill du veta mer eller engagera dig? Hör av dig till oss!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontaktinformation */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Kontaktinformation</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 tax text-primary mr-3" />
                  <a href="mailto:info@mojligheternasplats.se" className="text-foreground hover:underline">
                    info@mojligheternasplats.se
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary  mr-3" />
                  <a href="tel:+46812345678" className="text-foreground hover:underline">
                    08-123 456 78
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Stockholm, Sverige</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-primary  mr-3" />
                  <span className="text-foreground">Internationella projekt via Erasmus+</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Öppettider Kvällsöppet</h4>
                <p className="text-muted-foreground">Tisdag - Torsdag: 14:00 - 22:00</p>
              </div>
            </div>

            {/* Kontaktformulär */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Skicka ett meddelande</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Vi svarar så snart vi kan!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Namn</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">E-post</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="din@email.se"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Meddelande</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Skriv ditt meddelande här..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Skicka meddelande
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className=" bg-background text-foreground border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Möjligheternas Plats</h3>
              <p className="text-sm text-muted-foreground">
                Skapar trygga rum där unga kan växa, utvecklas och hitta sin väg i livet.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Program</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Ledarskapsutbildning</a></li>
                <li><a href="#" className="hover:text-primary">Dreamacademy</a></li>
                <li><a href="#" className="hover:text-primary">Summercamp</a></li>
                <li><a href="#" className="hover:text-primary">Kvällsöppet</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Om oss</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Vår vision</a></li>
                <li><a href="#" className="hover:text-primary">Vårt team</a></li>
                <li><a href="#" className="hover:text-primary">Partners</a></li>
                <li><a href="#" className="hover:text-primary">Nyheter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@mojligheternasplats.se</li>
                <li>08-123 456 78</li>
                <li>Stockholm, Sverige</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Möjligheternas Plats. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
