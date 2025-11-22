"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import Link from "next/link"
import { Search, Filter, X } from "lucide-react"

// --- KOMPONEN ISI (LOGIC) ---
function HeaderContent() {
  const router = useRouter()
  const searchParams = useSearchParams() // Logic yang bikin error kita taruh sini
  const pathname = usePathname()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  useEffect(() => {
    const q = searchParams.get("q") || ""
    const type = searchParams.get("type") || "all"
    setSearchQuery(q)
    setSelectedType(type)
  }, [searchParams])

  const handleUpdateParams = (newSearch: string, newType: string) => {
    if (pathname !== "/cards") {
      router.push(`/cards?q=${newSearch}&type=${newType}`)
      return
    }
    
    router.replace(`/cards?q=${newSearch}&type=${newType}`)
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setSearchQuery(val)
    handleUpdateParams(val, selectedType)
  }

  const onTypeChange = (type: string) => {
    setSelectedType(type)
    handleUpdateParams(searchQuery, type)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-xl pt-safe">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <Link href="/" className="flex-shrink-0 group">
            <img 
              src="/YuGiOh_Duel_Links.png" 
              alt="Yu-Gi-Oh! Catalog" 
              className="h-24 object-contain transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
          </Link>

          {/* --- SEARCH & FILTER SECTION --- */}
          <div className="flex-1 w-full md:max-w-xl flex flex-col gap-3">
            
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search cards..."
                value={searchQuery}
                onChange={onSearchChange}
                className="w-full h-10 bg-secondary/50 border border-white/10 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button 
                  onClick={() => {setSearchQuery(""); handleUpdateParams("", selectedType)}}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <div className="flex items-center gap-1 text-muted-foreground text-ms font-medium pr-2 border-r border-white/10 mr-2">
                <Filter className="w-3 h-5" />
                <span>Filter</span>
              </div>
              
              {["all", "Monster", "Spell", "Trap"].map((type) => (
                <button
                  key={type}
                  onClick={() => onTypeChange(type)}
                  className={`
                    px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border
                    ${selectedType === type 
                      ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                      : "bg-secondary/30 border-white/5 text-muted-foreground hover:bg-secondary hover:text-white"
                    }
                  `}
                >
                  {type === "all" ? "All Cards" : type}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

// --- KOMPONEN WRAPPER (INI YG DI-EXPORT) ---
export function Header() {
  return (
    <Suspense fallback={<div className="fixed top-0 left-0 right-0 z-50 h-24 bg-black/90" />}>
      <HeaderContent />
    </Suspense>
  )
}