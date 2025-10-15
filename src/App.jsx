import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Heart, Users, Target, Calendar, Mail, Phone, MapPin, ChevronRight, Star, Globe, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const programs = [
    {
      title: "Ledarskapsutbildning",
      description: "Vi utbildar unga i självledarskap och ledarskap för att stärka deras framtidsmöjligheter.",
      icon: <Target className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary"
    },
    {
      title: "Dreamacademy",
      description: "Projekt i grundskolor, fritidsgårdar och gymnasier med stöd från Postkodstiftelsen.",
      icon: <Star className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary"
    },
    {
      title: "Summercamp",
      description: "Ett sommarprojekt där vi kombinerar aktiviteter, utbildning och gemenskap.",
      icon: <Users className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary"
    },
    {
      title: "Kvällsöppet",
      description: "Tisdag till torsdag kl. 14–22 för alla unga som vill komma förbi.",
      icon: <Calendar className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary"
    }
  ]

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
      <nav className="fixed top-0 w-full bg-secondary/90 border-b border-border backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
    src="/mplatslogo.png" 
    alt="Möjligheternas Plats Logo" 
    className="h-12 w-12 rounded-full object-cover" 
  />
              <h1 className="text-xl md:text-2xl font-bold text-primary">Möjligheternas Plats</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Hem", "Om oss", "Program", "Nyheter", "Kontakt"].map((item, index) => (
                  <a key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">
                    {item}
                  </a>
                ))}
                <Button className="bg-primary text-primary-foreground hover:opacity-90">Engagera dig</Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-accent border-b border-border">
            {["Hem", "Om oss", "Program", "Nyheter", "Kontakt"].map((item, index) => (
              <a key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 hover:text-primary">
                {item}
              </a>
            ))}
            <Button className="mx-4 mb-4 bg-primary text-primary-foreground hover:opacity-90">Engagera dig</Button>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section id="hem" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Background gradient using theme colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230057B8' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            >
              Skapar <span className="text-primary">trygga rum</span><br />
              där unga kan <span className="text-accent">växa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Möjligheternas Plats är en förening som bygger broar mellan unga, skolor,
              fritidsgårdar och samhället. Vi vänder oss till ungdomar mellan 8–25 år
              och arbetar både lokalt och internationellt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:opacity-90 text-primary-foreground text-lg px-8 py-3"
              >
                Upptäck våra program
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3"
              >
                Läs mer om oss
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Om oss Section */}
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
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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


      {/* Program Section */}
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
                    <div className={`w-12 h-12 ${program.color.replace("bg-yellow-500", "bg-primary").replace("bg-teal-500", "bg-accent").replace("bg-orange-500", "bg-primary").replace("bg-green-500", "bg-accent")} rounded-lg flex items-center justify-center mb-4`}>
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
