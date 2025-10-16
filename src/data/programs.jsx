import { Target, Star, Users, Calendar } from 'lucide-react'

export const programs = [
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
