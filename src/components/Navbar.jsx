import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import { useMenuToggle } from '@/hooks/useMenuToggle.js'
import { programLinks, euLinks } from '@/config/navLinks.js'
import Dropdown from './Dropdown'

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = useMenuToggle()

  return (
    <nav className="fixed top-0 w-full bg-secondary/90 border-b border-border backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/mplatslogo.png" alt="Logo" className="h-12 w-12 rounded-full object-cover" />
            <h1 className="text-xl md:text-2xl font-bold text-primary">Möjligheternas Plats</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#hem" className="hover:text-primary">Hem</a>
            <a href="#om-oss" className="hover:text-primary">Om oss</a>
            <Dropdown label="Verksamhet" items={programLinks} basePath="/program" />
            <Dropdown label="EU-samarbeten" items={euLinks} basePath="/eu" />
            <Button className="bg-primary text-primary-foreground">Engagera dig</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-accent border-t border-border px-4 py-2">
          <a href="#hem" className="block py-1">Hem</a>
          <a href="#om-oss" className="block py-1">Om oss</a>
          <NestedList label="Program" items={programLinks} basePath="/program" />
          <NestedList label="EU-samarbeten" items={euLinks} basePath="/eu" />
          <Button className="mt-2 w-full bg-primary text-primary-foreground">Engagera dig</Button>
        </div>
      )}
    </nav>
  )
}



function NestedList({ label, items, basePath }) {
  return (
    <div className="mt-2">
      <span className="font-semibold">{label}</span>
      {items.map((item, i) => (
        <a
          key={i}
          href={`${basePath}/${item.toLowerCase().replace(/\s|\+/g, '-').replace(/[åäö]/gi, m => ({
            å: 'a', ä: 'a', ö: 'o'
          })[m.toLowerCase()] || m)}`}
          className="block pl-4 py-1 text-sm hover:text-primary"
        >
          {item}
        </a>
      ))}
    </div>
  )
}
