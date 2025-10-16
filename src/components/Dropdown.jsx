import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Dropdown({ label, items, basePath }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
      >
        {label}
        <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition transform scale-100 opacity-100 duration-100 ease-out"
        >
          <div className="py-1">
            {items.map((item, i) => (
              <a
                key={i}
                href={`${basePath}/${item
                  .toLowerCase()
                  .replace(/\s|\+/g, '-')
                  .replace(/[åäö]/gi, m => ({ å: 'a', ä: 'a', ö: 'o' }[m.toLowerCase()] || m))}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
